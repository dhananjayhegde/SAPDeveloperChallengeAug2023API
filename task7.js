const { getHashForString, getHashForStringForUser } = require(".")

const task7 = async () => {
    const dirGuid = "8b39deda-1fd4-4b1f-9e57-b4ffe4bb2d56"
    const hash = await getHashForString( dirGuid.length )

    console.log(hash)
}

task7()