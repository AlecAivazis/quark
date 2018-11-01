export default filepath => {
    // the regex to extract package and section
    const regex = /.+\/(quark-(web|native|core))\/src(\/components\/(\w+))?/

    // grab the groups out of the regex
    const match = filepath.match(regex)
    if (!match) {
        throw new Error(`Filepath did not match expectation: ${filepath}`)
    }
    const [_, pkg, __, section] = filepath.match(regex)

    return {
        package: pkg,
        section
    }
}
