const { getHashForString } = require(".")

const getCategory = async (categoryId) => {
    const response = await fetch(`https://developer-challenge.cfapps.eu10.hana.ondemand.com/odata/v4/northbreeze/Categories(${ categoryId })?$select=CategoryID,CategoryName`, {
        headers: {
            "Accept": "application/json"
        }
    })

    if( response.status === 404 ) {
        return false
    }

    const data = await response.json()
    return data
}

const createNewCategory = async (categoryId, categoryName, categoryDescr) => {
    const resp = await fetch("https://developer-challenge.cfapps.eu10.hana.ondemand.com/odata/v4/northbreeze/Categories", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            CategoryID: categoryId,
            CategoryName: categoryName,
            Description: categoryDescr
        })
    })

    if( resp.status !== 201 ){
        console.error( "Error during create" )
        return
    }
}

const doTask = async () => {
    let category = await getCategory( 986 )
    if( ! category ){
        await createNewCategory(986, 'dhegde', 'August Developer Challenge')
        category = await getCategory( 986 )
    } else {
        console.log("Already created")
    }
    
    console.log( "before ==> ", category )
    
    let categoryOrdered = Object.keys( category ).sort().reduce((obj, key) => {
        obj[key] = category[key]
        return obj
    }, {} )

    const jsonString = JSON.stringify(categoryOrdered)
    console.log( jsonString )

    const hash = await getHashForString( jsonString )
    console.log(hash)
}

doTask()

