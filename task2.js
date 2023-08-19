const { doIt, getHash, getHashForString } = require(".");

(async () => {
    const response = await fetch("https://developer-challenge.cfapps.eu10.hana.ondemand.com/odata/v4/northbreeze/Products?$apply=filter(Discontinued eq false)/aggregate(UnitsInStock with sum as TotalStock)")
    const data = await response.json()

    const totalStock =  data.value[0]["TotalStock"]

    console.log( await getHashForString( totalStock ) )
})()

/**
 * This is to verify whether the aggregate query above is written correctly.  Both filter the Products that are NOT discontinued and then 
 */
const getTotalStockOfLiveProductsAlt = async () => {
    const response = await fetch("https://developer-challenge.cfapps.eu10.hana.ondemand.com/odata/v4/northbreeze/Products?$filter=Discontinued eq false")
    const data = await response.json()

    const TotalStock = data.value.reduce((totalUnitsInStock, product) => {
        return totalUnitsInStock + product.UnitsInStock
    }, 0)

    console.log(TotalStock)
}

// doIt( getTotalStockOfLiveProducts )
// getTotalStockOfLiveProductsAlt()

