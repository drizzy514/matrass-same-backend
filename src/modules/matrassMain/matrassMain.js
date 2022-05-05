const {fetch, fetchAll} = require("../../lib/postgres");
const router = require("express").Router();
const {getMatrassMain, getMainNumber} = require('./model')


router.route('/').get(async (req, res) => {
        try{
                const matrassMain = await fetchAll(getMatrassMain)
                res.status(200).json(matrassMain)
        }catch(e) {
            console.log(e)
        }
       
})
router.route('/number').get(async (_, res) => {
        const mainNumber = await fetchAll(getMainNumber)
        res.status(200).json(mainNumber)
})
module.exports = router

