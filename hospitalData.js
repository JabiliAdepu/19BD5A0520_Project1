const express = require("express");
const router = express.Router();
const Hospital = require("./schemas/hospital");

router.get('/', async(req, res) => {
    try {
        const hospital = await Hospital.find();
        res.json(hospital);
    } catch (error) {
        res.send("Error: " + error);
    }
});

router.post('/', async(req, res) => {
    const hospital = new Hospital({
        hId: req.body.hId,
        name: req.body.name,
        location: req.body.location,
        address: req.body.address,
        contactNo: req.body.contactNo
    });
    await hospital.save().catch(e => { throw e })
});


module.exports = router;