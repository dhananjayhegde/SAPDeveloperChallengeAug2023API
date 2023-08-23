const { getHashForString } = require(".");

require("dotenv").config();

const getCountryDateFormat = async () => {
    const resp = await fetch("https://sandbox.api.sap.com/dateandtime/getCountryDateFormat?country=DE", {
        headers: {
            "APIKey": process.env.SAP_API_HUB_API_KEY
        }
    })

    const countryDateFormat = await resp.text()
    console.log(countryDateFormat)

    const hash = await getHashForString( countryDateFormat + ",x-abap-response-time" )
    console.log(hash)
}

getCountryDateFormat()