require("dotenv").config();

const getCountryDateFormat = async () => {
    const resp = await fetch("https://sandbox.api.sap.com/dateandtime/getTimezoneFromLocation?country=DE", {
        headers: {
            "APIKey": process.env.SAP_API_HUB_API_KEY,
            "Accept": "application/json"
        }
    })

    const data = await resp.text()
    console.log(data)
}

getCountryDateFormat()