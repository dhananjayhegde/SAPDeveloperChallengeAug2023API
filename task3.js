const { getHashForString } = require(".");

(async () => {
    const response = await fetch("https://developer-challenge.cfapps.eu10.hana.ondemand.com/odata/v4/northbreeze/selectProduct", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({
            communityid: "dhegde"
        })
    })
    
    const data = await response.json()
    console.log( await getHashForString( data.value ) )
})()