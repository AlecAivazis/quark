// external imports
import fs from 'fs'
import path from 'path'
import chalk from 'chalk'

class FSUtils {
    getDirectories(filePath) {
        return fs
            .readdirSync(filePath)
            .filter(file => fs.statSync(path.join(filePath, file)).isDirectory())
    }

    getFiles(filePath) {
        return fs
            .readdirSync(filePath)
            .filter(file => fs.statSync(path.join(filePath, file)).isFile())
    }
    writeFile(filePath, content) {
        fs.writeFile(
            filePath,
            content,
            err =>
                err
                    ? console.log(chalk.red(err))
                    : console.log(chalk.green('Component data saved.'))
        )
    }

    readFile(filePath) {
        return fs.readFileSync(filePath, 'utf-8')
    }

    pathExists(filePath) {
        return fs.existsSync(filePath)
    }
}

export default FSUtils
