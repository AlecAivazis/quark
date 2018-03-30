// external imports
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const parse = require('react-docgen').parse
const chokidar = require('chokidar')
// local imports
const paths = require('../project-paths')
// list of packages to generate metaData for
const packages = [paths.web]

const enableWatchMode = process.argv.slice(2) == '--watch'
if (enableWatchMode) {
    // Regenerate component metadata when components or examples change.
    chokidar.watch(packages).on('change', (event, path) => generate(paths))
} else {
    // Generate component metadata
    packages.forEach(pkg => generate(pkg))
}

function generate(pkg) {
    const errors = []
    const componentData = getDirectories(pkg).map(sectionName => {
        const sectionPath = path.join(pkg, sectionName)
        return getDirectories(sectionPath).map(componentName => {
            try {
                const componentPath = path.join(sectionPath, componentName)
                return getComponentData({ componentName, sectionName, componentPath })
            } catch (error) {
                errors.push(
                    'An error occurred while attempting to generate metadata for ' +
                        componentName +
                        '. ' +
                        error
                )
            }
        })
    })
    writeFile(
        paths.output,
        'module.exports = ' + JSON.stringify(errors.length ? errors : componentData)
    )
}

function getComponentData({ componentName, sectionName, componentPath }) {
    const indexPath = path.join(componentPath, 'index.js')
    const examplesPath = path.join(componentPath, 'examples')
    const content = readFile(indexPath)
    const info = parse(content)

    return {
        name: componentName,
        section: sectionName,
        description: info.description,
        props: info.props,
        code: content,
        examples: getExampleData({ examplesPath, componentName })
    }
}

function getExampleData({ examplesPath, componentName }) {
    const examples = getExampleFiles({ examplesPath, componentName })
    return examples.map(file => {
        const filePath = path.join(examplesPath, file)
        const content = readFile(filePath)
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

function getExampleFiles({ examplesPath, componentName }) {
    let exampleFiles = []
    try {
        exampleFiles = getFiles(path.join(examplesPath, componentName))
    } catch (error) {
        console.log(chalk.red(`No examples found for ${componentName}.`))
    }
    return exampleFiles
}

function getDirectories(filepath) {
    return fs
        .readdirSync(filepath)
        .filter(file => fs.statSync(path.join(filepath, file)).isDirectory())
}

function getFiles(filepath) {
    return fs.readdirSync(filepath).filter(file => fs.statSync(path.join(filepath, file)).isFile())
}

function writeFile(filepath, content) {
    fs.writeFile(
        filepath,
        content,
        err =>
            err ? console.log(chalk.red(err)) : console.log(chalk.green('Component data saved.'))
    )
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8')
}
