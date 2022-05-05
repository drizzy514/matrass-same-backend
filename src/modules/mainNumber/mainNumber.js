const {fetch, fetchAll} = require("../../lib/postgres");
const router = require("express").Router();
const { getMainNumber} = require('./model')



router.route('/').get(async (_, res) => {
    const mainNumber = await fetchAll(getMainNumber)
    res.status(200).json(mainNumber)
})
module.exports = router