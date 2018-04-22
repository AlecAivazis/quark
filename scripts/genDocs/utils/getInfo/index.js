// external imports
import path from 'path'
import recast from 'recast'
import babylonParser from 'recast/parsers/babylon'
import prettier from 'prettier'
// local imports
import { readDir, readFile, parseFile } from '..'

export const examplesDir = path.resolve('docs', 'examples')

export default async ({ section, component }) => {
    // get the list of files in the directory with the section/component examples
    const componentExampleDir = path.join(examplesDir, section, component)
    try {
        var exampleDirContents = await readDir(componentExampleDir)
    } catch {
        throw new Error(`Could not find example for ${component}`)
    }

    // look at the contents of the directory for the list of examples
    const examples = await Promise.all(
        exampleDirContents.filter(filename => filename !== 'README.md').map(async filename => {
            // parse the contents of the example file
            const contents = recast.parse(
                (await readFile(path.join(componentExampleDir, filename))).toString(),
                {
                    parser: babylonParser
                }
            )

            // find the default export
            const node = contents.program.body.find(
                node => node.type === 'ExportDefaultDeclaration'
            )

            // parse the comment of the default export to retrieve the title string
            const title = node.comments && node.comments[0].value.match(/\s+title: "(.*)"/)

            // add the example information to the result
            return {
                filename: filename,
                title: title && title[1],
                contents: prettier
                    .format(recast.print(node.declaration).code, { semi: false })
                    .trim()
                    .slice(1)
            }
        })
    )

    // if there is a readme, use it as the description
    const description = exampleDirContents.includes('README.md')
        ? (await readFile(path.join(componentExampleDir, 'README.md'))).toString()
        : null

    return {
        examples,
        description
    }
}
