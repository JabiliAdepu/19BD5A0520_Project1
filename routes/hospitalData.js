const express = require("express");
const { removeAllListeners } = require("../schemas/hospital");
const router = express.Router();
const Hospital = require("../schemas/hospital");

router.route('/')

    //DISPLAY ALL HOSPITALS
    .get((req, res, next) => {
        Hospital.find().then(hospitals => {
             return res.json({
                status: true,
                hospitals: hospitals
            });
        }).catch(e => res.json(e)); 
    })

    //READ HOSPITAL DETAILS
    .post((req, res, next) => {
        console.log(req.body);
        const hospital= {
            hId: req.body.hId,
            name: req.body.name,
            location: req.body.location,
            address: req.body.address,
            contactNo: req.body.contactNo
        };
        Hospital.create(hospital).then( hosp => {
            return res.json({
                status: true,
                hospital: hosp
            });
        }).catch(e => res.json(e));
    })

//SEARCH HOSPITAL BY NAME
router.route("/:name")
    .get((req, res, next) => {
        Hospital.findOne({name : req.params.name})
        .then(hospital => {
            return res.json({
                status: true,
                hospital: hospital
            });
        }).catch(e => res.json(e));
    });
    

module.exports = router;