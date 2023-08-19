const { doIt } = require(".")

/**
 * Task #1 Value Provider
 * @returns Comma separated list of entity sets from Northwind ODATA service
 */
getEntitySets = async () => {
    const response = await fetch("https://services.odata.org/V4/Northwind/Northwind.svc/")
    const data = await response.json()

    const result = data.value.map( entity => entity.name ).sort().toString()
    console.log(result)

    return result
}

doIt( getEntitySets )