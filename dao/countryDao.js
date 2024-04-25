const countryModel = require('../models/oneToOne/countryModel')
const capitalModel = require('../models/oneToOne/capitalModel')

async function getList() {
    try {
        const list = await model.findAll();
        return list;
    } catch (err) {
        console.log(err)
    }
}

async function addCountry(obj) {
    console.log('inside', obj)
    const { countryName , capital } = obj
    try {
        const country = await countryModel.create({ countryName: countryName });
        await capitalModel.create({
            capital: capital,
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