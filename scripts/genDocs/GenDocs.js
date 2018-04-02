// external imports
const path = require('path')
const chalk = require('chalk')
const { parse } = require('react-docgen')
// local imports
const FSUtils = require('./FSUtils')
const quarkPaths = require('../filePath')

class GenDocs extends FSUtils {
    constructor(packageDirs) {
        super()
        this.packageDirs = packageDirs
        this.errors = []
        this.componentData = []
    }

    init() {
        // iterate over all packages
        this.packageDirs.forEach(({ sourceDir }) => this.generate(sourceDir))
        // write output
        this.writeResult()
    }

    generate(pkg) {
        // get all sections inside the package
        const sections = this.getDirectories(pkg)
        // get componentData
        this.componentData = sections.reduce((data, sectionName) => {
            // build path to current section
            const sectionPath = path.join(pkg, sectionName)
            // get all components from current section
            const sectionData = this.getDirectories(sectionPath)
                // only gen docs for uppercase dir names inside each section (i.e., react components)
                .filter(dirName => dirName[0] === dirName[0].toUpperCase())
                // map over components and generate docs for each
                .map(componentName => {
                    try {
                        const componentPath = path.join(sectionPath, componentName)
                        const componentData = this.getComponentData({
                            componentName,
                            sectionName,
                            componentPath
                        })
                        // if we already have data for this component just add any new examples to existing entry
                        // else create new entry
                        return componentData
                    } catch (error) {
                        this.errors.push(
                            `An error occurred while attempting to generate metadata for ${componentName}. ${error}`
                        )
                    }
                })

            return [
                ...data,
                {
                    section: sectionName,
                    data: sectionData
                }
            ]
        }, [])
    }

    writeResult() {
        this.errors.length
            ? console.log(chalk.red(this.errors.join('\n')))
            : this.writeFile(
                  path.join(quarkPaths.docs, 'componentData.js'),
                  `module.exports = ${JSON.stringify(this.componentData, null, '')}`
              )
    }

    checkUniqueness({ sectionName, componentName }) {}

    getComponentData({ componentName, sectionName, componentPath }) {
        const indexPath = path.join(componentPath, 'index.js')
        const examplesPath = path.join(componentPath, 'examples')
        const content = this.readFile(indexPath)
        const info = parse(content)

        return {
            name: componentName,
            section: sectionName,
            description: info.description,
            props: info.props,
            code: content
            // examples: getExampleData({ examplesPath, componentName })
        }
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
