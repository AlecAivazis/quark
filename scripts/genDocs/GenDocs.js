// external imports
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const { parse } = require('react-docgen')
const _ = require('lodash')
// local imports
const filePath = require('../filePath')
const FSUtils = require('./FSUtils')
const quarkPaths = require('../filePath')

class GenDocs extends FSUtils {
    constructor(packageDirs, ...args) {
        super(...args)
        this.packageDirs = packageDirs
        this.quarkCore = packageDirs.find(({ name }) => name === 'quark-core')
        this.quarkWeb = packageDirs.find(({ name }) => name === 'quark-web')
        this.quarkNative = packageDirs.find(({ name }) => name === 'quark-native')
        this.errors = []
        this.data = []
    }

    init() {
        try {
            // generate metadata
            this.generate()
        } catch (err) {
            this.errors.push(err)
        }
        // write output
        this.writeResult()
    }

    generate(packageDirs) {
        const sections = this.sections
        const withComponents = this.addComponentsToSections(sections)
        const withPackages = this.addTagsToComponents(withComponents)
        const withProps = this.addPropsToComponents(withPackages)
        const withExamples = this.addExamplesToComponents(withProps)
    }

    get sections() {
        const sections = this.packageDirs.reduce((accSections, currPkg) => {
            const sections = this.getDirectories(currPkg.componentsDir)
            return accSections.concat(sections)
        }, [])
        // dedupe sections
        return _.uniq(sections)
    }

    addComponentsToSections(sections) {
        return sections.reduce((accComponents, currSection) => {
            // collect components
            let components = []
            // check if the sections exists
            this.packageDirs.forEach(pkg => {
                // build path to section in the current pkg
                const sectionPath = path.join(pkg.componentsDir, currSection)
                // check if sectionPath is valid in this pkg
                if (this.pathExists(sectionPath)) {
                    components = components.concat(this.getDirectories(sectionPath))
                }
            })
            // dedupe and remove all directors that do not follow convention for components
            const filteredComponents = _.uniq(components).filter(
                // must be uppercase and cannot started with underscore
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
    }

    addTagsToComponents(sectionsWithComponents) {
        return sectionsWithComponents.reduce((accSections, currSection) => {
            const components = currSection.components.map(component => {
                // the tags for a component
                let tags = []
                // check core
                const pathToCore = path.join(
                    this.quarkCore.componentsDir,
                    currSection.section,
                    component
                )
                if (this.pathExists(pathToCore)) {
                    // no-op
                    tags.push('quark-core')
                }
                // check web
                const pathToWeb = path.join(
                    this.quarkWeb.componentsDir,
                    currSection.section,
                    component
                )
                // check if sectionPath is valid in this pkg
                if (this.pathExists(pathToWeb)) {
                    tags.push('quark-web')
                }
                // check native
                const pathToNative = path.join(
                    this.quarkNative.componentsDir,
                    currSection.section,
                    component
                )
                if (this.pathExists(pathToNative)) {
                    tags.push('quark-native')
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
    }

    addPropsToComponents(componentsWithTags) {
        return componentsWithTags.reduce((sections, section) => {
            const components = section.components.map(component => {
                // get list of props based on the tags / packages in which component resides
                const props = []
                component.tags.forEach(tag => {
                    const propData = this.getProps(tag, section.section, component.component)
                    props.push(propData)
                })
                // if only one tag then there are no props to compare
                if (props.length === 1) {
                    return {
                        ...component,
                        props: props[0]
                    }
                } else if (props.length === 2) {
                    // TODO: perform deep comparision here
                    // NOTE: how deep should the comparision go? Keys? Keys and values?
                    return component
                    // if have two sets of props compare the result to make sure consistent
                } else {
                    console.log(chalk.red(`No props found for ${component.component}.`))
                    // throw new Error(`No props found for: ${component}.`)
                }
            })
            // update component field of current section
            const updatedSection = { ...section, components }
            // add components for section back to accumulator
            return sections.concat(updatedSection)
        }, [])
    }

    getProps(tag, section, component) {
        // get packageDir based on tag
        const { componentsDir } = this.packageDirs.find(({ name }) => tag === name)
        // build index path
        const indexPath = path.join(componentsDir, section, component, 'index.js')
        // get the file's content
        const content = this.readFile(indexPath)
        // return the props from file content
        return parse(content).props
    }

    addExamplesToComponents(sections) {
        return sections.reduce((accSections, currSection) => {
            const components = currSection.components.map(component => {
                // build examples file path
                const examplesPath = path.join(
                    filePath.docs,
                    'examples',
                    currSection.section,
                    component.component
                )
                // throw if no examples exist for this section/component
                if (!this.pathExists(examplesPath)) {
                    console.log(chalk.red(`No examples provided for ${component.component}.`))
                }
                return {
                    ...component,
                    // TODO: look for & parse README!
                    description: 'foo',
                    examples: this.getExampleData()
                }
            })
        }, [])
        // update component field of current section
        const updatedSection = { ...currSection, components }
        // add components for section back to accumulator
        return accSections.concat(updatedSection)
    }

    writeResult() {
        this.errors.length
            ? console.log(chalk.red(this.errors.join('\n')))
            : // : this.writeFile(
              //       path.join(quarkPaths.docs, 'componentData.js'),
              //       `module.exports = ${JSON.stringify(this.data, null, '')}`
              //   )
              this.writeFile(
                  path.join(quarkPaths.docs, 'componentData.json'),
                  JSON.stringify(this.data, null, ''),
                  'utf8'
              )
    }

    getExampleData({ examplesPath, componentName }) {
        const examples = this.getExampleFiles({ examplesPath, componentName })
        return examples.map(file => {
            const filePath = path.join(examplesPath, file)
            const content = this.readFile(filePath)
            const info = parse(content)
            return {
                // By convention, component name should match the filename.
                // So remove the .js extension to get the component name.
                name: file.slice(0, -3),
                description: info.description,
                code: content
            }
        })
    }

    getExampleFiles({ examplesPath, componentName }) {
        let exampleFiles = []
        try {
            exampleFiles = this.getFiles(path.join(examplesPath, componentName))
        } catch (error) {
            console.log(chalk.red(`No examples found for ${componentName}.`))
        }
        return exampleFiles
    }
}

module.exports = GenDocs
