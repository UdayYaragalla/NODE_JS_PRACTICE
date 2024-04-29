const { Country, Capital } = require('../models')

async function getList() {
    try {
        const list = await Country.findAll();
        return list;
    } catch (err) {
        console.log(err)
    }
}

async function addCountry(obj) {
    console.log('inside', obj)
    const { countryName, capital } = obj
    try {
        const country = await Country.create({ countryName: countryName });
        await Capital.create({
            capitalName: capital,
            country_id: country.countryId
        });

        return "Country added successfully."
    } catch (err) {
        console.log("err", err);
    }
}

module.exports = {
    getList,
    addCountry
}