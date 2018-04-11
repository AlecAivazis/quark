// external imports
import path from 'path'
import chalk from 'chalk'
import fs from 'fs'
import { parse } from 'react-docgen'
import _ from 'lodash'
// local imports
import FSUtils from './FSUtils'
import quarkPaths from '../filePath'

class GenDocs extends FSUtils {
    constructor(packageDirs, ...args) {
        super(...args)
        this._quarkCore = packageDirs.find(({ name }) => name === 'quark-core')
        this._quarkWeb = packageDirs.find(({ name }) => name === 'quark-web')
        this._quarkNative = packageDirs.find(({ name }) => name === 'quark-native')
        this._errors = []
    }

    get _packageDirs() {
        return [this._quarkCore, this._quarkWeb, this._quarkNative]
    }

    get _sections() {
        const sections = this._packageDirs.reduce((accSections, currPkg) => {
            const sections = this.getDirectories(currPkg.componentsDir)
            return accSections.concat(sections)
        }, [])
        // dedupe sections
        return _.uniq(sections)
    }

    generateData = () => {
        const withComponents = this.addComponentsToSections(this._sections)
        const withPackages = this.addTagsToComponents(withComponents)
        const withProps = this.addPropsToComponents(withPackages)
        return this.addExamplesToComponents(withProps)
    }

    addComponentsToSections = sections =>
        sections.reduce((accComponents, currSection) => {
            // collect components
            let components = []
            // check if the sections exists
            this._packageDirs.forEach(pkg => {
                // build path to section in the current pkg
                const sectionPath = path.join(pkg.componentsDir, currSection)
                // check if sectionPath is valid in this pkg
                try {
                    const newComponents = this.getDirectories(sectionPath)
                    components = components.concat(newComponents)
                } catch (err) {
                    // swallow this exception
                }
            })
            // dedupe and remove all directors that do not follow convention for components
            const filteredComponents = _.uniq(components).filter(
                // must be uppercase and cannot started with underscore in order to ignore snapshots
                dir => dir[0] === dir[0].toUpperCase() && dir[0] !== '_'
            )
            // return accumulator if no components exist in the section
            if (filteredComponents.length === 0) {
                return accComponents
            }
            // add to accumulator
            return accComponents.concat({
                section: currSection,
                components: filteredComponents
            })
        }, [])

    addTagsToComponents = sectionsWithComponents =>
        sectionsWithComponents.reduce((accSections, currSection) => {
            const components = currSection.components.map(component => {
                // the tags for a component
                let tags = []
                // check core
                const pathToCore = path.join(
                    this._quarkCore.componentsDir,
                    currSection.section,
                    component
                )
                if (this.pathExists(pathToCore)) {
                    tags.push(this._quarkCore.name)
                }
                // check web
                const pathToWeb = path.join(
                    this._quarkWeb.componentsDir,
                    currSection.section,
                    component
                )
                // check if sectionPath is valid in this pkg
                if (this.pathExists(pathToWeb)) {
                    tags.push(this._quarkWeb.name)
                }
                // check native
                const pathToNative = path.join(
                    this._quarkNative.componentsDir,
                    currSection.section,
                    component
                )
                if (this.pathExists(pathToNative)) {
                    tags.push(this._quarkNative.name)
                }
                return {
                    component,
                    tags
                }
            })
            // update component field of current section
            const updatedSection = { ...currSection, components }
            // add components for section back to accumulator
            return accSections.concat(updatedSection)
        }, [])

    addPropsToComponents = componentsWithTags =>
        componentsWithTags.reduce((sections, section) => {
            const components = section.components.map(component => {
                // get list of props based on the tags / packages in which component resides
                const props = []
                component.tags.forEach(tag => {
                    const propData = this.getProps({
                        tag,
                        section: section.section,
                        component: component.component
                    })
                    props.push(propData)
                })
                // if only one tag then there are no props to compare
                if (props.length === 1) {
                    return {
                        ...component,
                        props: props[0]
                    }
                } else if (props.length === 2) {
                    // compare props if component exists in more than one package
                    const hasSameProps = _.isEqual(props[0], props[1])
                    if (!hasSameProps) {
                        console.log(
                            chalk.red(
                                `Prop table is not equal across packages for ${
                                    component.component
                                }. Please reconcile.`
                            )
                        )
                    }
                    return component
                } else {
                    console.log(chalk.red(`Missing props for ${component.component}.`))
                    // throw new Error(`No props found for: ${component}.`)
                }
            })
            // update component field of current section
            const updatedSection = { ...section, components }
            // add components for section back to accumulator
            return sections.concat(updatedSection)
        }, [])

    getProps = ({ tag, section, component }) => {
        // get packageDir based on tag
        const { componentsDir } = this._packageDirs.find(({ name }) => tag === name)
        // build index path
        const index = 'index.js'
        const indexPath = path.join(componentsDir, section, component, index)
        try {
            // get the file's content
            const content = this.readFile(indexPath)
            // return the props from file content
            return parse(content).props
        } catch (err) {
            this._errors.push(`Issue parsing props ${indexPath}: ${err}.`)
        }
    }

    addExamplesToComponents = sections =>
        sections.reduce((accSections, currSection) => {
            const components = currSection.components.map(currComponent => {
                const { section: sectionName } = currSection
                const { component: componentName } = currComponent
                const examplesPath = path.join(quarkPaths.examples, sectionName, componentName)

                return {
                    ...currComponent,
                    description: this.getReadme({ sectionName, componentName }),
                    examples: this.getExampleData({ sectionName, componentName })
                }
            })
            // update component field of current section
            const updatedSection = { ...currSection, components }
            // add components for section back to accumulator
            return accSections.concat(updatedSection)
        }, [])

    getReadme = ({ sectionName, componentName }) => {
        const readme = 'README.md'
        const readmePath = path.join(quarkPaths.examples, sectionName, componentName, readme)
        let content = ''

        try {
            content = this.readFile(readmePath)
        } catch (err) {
            this._errors.push(`No README provided for ${componentName}.`)
        }

        return content
    }

    getExampleData = ({ sectionName, componentName }) => {
        const examplesPath = path.join(quarkPaths.examples, sectionName, componentName)
        const examples = this.getExampleFile({ sectionName, componentName })

        return examples.map(file => {
            const filePath = path.join(examplesPath, file)
            const content = this.readFile(filePath)
            let description = ''

            try {
                description = parse(content).description
            } catch (err) {
                this._errors.push(`Could not parse description in ${filePath} due to ${err}`)
            }

            return {
                // Remove the .js extension to get the component name.
                name: file.slice(0, -3),
                description,
                code: content
            }
        })
    }

    getExampleFile = ({ sectionName, componentName }) => {
        const examplesPath = path.join(quarkPaths.examples, sectionName, componentName)
        let exampleFiles = []
        try {
            // get all example files and filter out the README
            exampleFiles = this.getFiles(examplesPath).filter(file => file !== 'README.md')
            // throw error if no example files exist
            if (exampleFiles.length === 0) {
                throw Error
            }
        } catch (err) {
            this._errors.push(`No examples found for ${componentName}.`)
        }
        return exampleFiles
    }

    writeResult = () => {
        const data = this.generateData()

        // yell loudly if there are errors
        if (this._errors.length > 0) {
            console.log(chalk.red(this._errors.join('\n')))
            return
        }

        const file = 'data.json'
        this.writeFile(path.join(quarkPaths.docs, file), JSON.stringify(data, null, ''))
        // log some basic stats
        const numOfSections = data.length
        const numOfComponents = data.reduce((acc, curr) => acc + curr.components.length, 0)
        console.log(chalk.green(`${numOfSections} sections\n${numOfComponents} components`))
    }
}

export default GenDocs
