const fs = require("fs/promises");
const { getHashForString } = require(".");

const readAPISpecification = async (fileName) => {
    try {
        const apiSpec = await fs.readFile(fileName, { encoding: 'utf8'})
        const specJson = JSON.parse(apiSpec)

        const endpoints = Object.entries(specJson.paths).filter( ep => {
            const [ key, value ] = ep
            return value.get && value.get.produces.includes("application/json")
        })
        .map( ep => { return ep[0] } )
        .sort()
        .reduce( (result, ep) => { return result + ":" + ep }, "" )
        .substring(1) // exclude the first ":"

        console.log(endpoints)
        const hash = await getHashForString(  endpoints )
        console.log(hash)

    } catch (err) {
        console.error(err)
    }
}

readAPISpecification("DateAndTime.json")