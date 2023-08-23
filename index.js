
exports.getHashForString = async (stringValue) => {

    const encodedString = encodeURIComponent(stringValue)    
    const response = await fetch(`https://developer-challenge.cfapps.eu10.hana.ondemand.com/v1/hash(value='${encodedString}')`, {
        headers: {
            "CommunityID": "dhegde",
            "Accept": "application/json"
        }
    })

    const data = await response.text()
    return data
}

exports.getHashForStringForUser = async (stringValue, user) => {

    const encodedString = encodeURIComponent(stringValue)    
    const response = await fetch(`https://developer-challenge.cfapps.eu10.hana.ondemand.com/v1/hash(value='${encodedString}')`, {
        headers: {
            "CommunityID": user,
            "Accept": "application/json"
        }
    })

    const data = await response.text()
    return data
}

/**
 * 
 * @param {Callback function that is called to get the value to be hashed} valueProviderCallback 
 * @returns a hash of value returned by the callback and the CommunityID
 */
exports.getHash = async (callback) => {
    // Pass any numberof argument to valueProvider Callback
    const value = await callback.apply(arguments)
    
    const response = await fetch(`https://developer-challenge.cfapps.eu10.hana.ondemand.com/v1/hash(value='${value}')`, {
        headers: {
            "CommunityID": "dhegde",
            "Accept": "application/json"
        }
    })

    const data = await response.text()
    return data
}

/**
 * Do it finally
 */
exports.doIt = async (callback) => {
    console.log( "Here is you hash: ", await getHash( callback ) )
}
