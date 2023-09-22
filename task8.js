const { getHashForString } = require(".");

const getAccessToken = async () => {
    
    const base64Encoded = btoa(`${process.env.CIS_CLIENT_ID}:${process.env.CIS_CLIENT_SECRET}`)
    const resp = await fetch("https://uaa.cf.us10-001.hana.ondemand.com/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "Authorization": `Basic ${base64Encoded}`
        },
        body: encodeURIComponent(`grant_type=password&username=${process.env.CIS_USER}&password=${process.env.CIS_PASSWORD}`)
    })

    const tokenData = await resp.json();

    console.log(tokenData)
}

getAccessToken()

const doTask = async () => {
    const hash = await getHashForString("managed_service_instance")
    console.log(hash)
}

doTask()