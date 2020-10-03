const express = require("express");
const { removeAllListeners } = require("../schemas/ventilators");
const router = express.Router();
const Ventilator = require("../schemas/ventilators");

router.route('/')

    //DISPLAY ALL VENTILATORS
    .get((req, res, next) => {
        Ventilator.find().then(ventilators => {
            return res.json({
                status: true,
                ventilators: ventilators
            });
        }).catch(e => res.json(e)); 
    })

    //READ VENTILATOR DETAILS
    .post((req, res, next) => {
        console.log(req.body);
        const ventilator= {
            hId: req.body.hId,
            ventilatorId: req.body.ventilatorId,
            status: req.body.status,
            name: req.body.name
        };
        Ventilator.create(ventilator).then( vent => {
            return res.json({
                status: true,
                ventilator: vent
            });
        }).catch(e => res.json(e));
    });

//SEARCH VENTILATOR BY STATUS & HOSPITAL NAME
router.route("/:status&:name")
    .get((req, res, next) => {
        Ventilator.find({status: req.params.status, name: req.params.name})
        .then(ventilator => {
            return res.json({
                status: true,
                ventilator: ventilator
            });
        }).catch(e => res.json(e));
    });

//SEARCH VENTILATOR BY STATUS 
router.route("/searchByStatus/:status")
    .get((req, res, next) => {
        Ventilator.find({status: req.params.status})
        .then(ventilator => {
            return res.json({
                status: true,
                ventilator: ventilator
            });
        }).catch(e => res.json(e));
    });

//SEARCH VENTILATOR BY HOSPITAL NAME
router.route("/searchByName/:name")
    .get((req, res, next) => {
        Ventilator.find({name: req.params.name})
        .then(ventilator => {
            return res.json({
                status: true,
                ventilator: ventilator
            });
        }).catch(e => res.json(e));
    });


//SEARCH VENTILATOR BY STATUS OR HOSPITAL NAME
/*router.route("/:status?/:name?")
    .get((req, res, next) => {
        console.log(req.params);
        Ventilator.find({$or:[{status: req.params.status},
                                {name: req.params.name}]})
        .then(ventilator => {
            return res.json({
                status: true,
                ventilator: ventilator
            });
        }).catch(e => res.json(e));
    });
*/

router.route("/:ventilatorId")

    //UPDATE VENTILATOR DETAILS BY VENTILATOR ID
    .put((req, res, next) => {
        console.log(req.body);
        const ventilator={};
        if(!!req.body.hId) ventilator['hId'] = req.body.hId;
        if(!!req.body.status) ventilator['status'] = req.body.status;
        if(!!req.body.name) ventilator['name'] = req.body.name;
        Ventilator.findOneAndUpdate({ventilatorId: req.params.ventilatorId},
            {$set: ventilator}, { new: true })
            .then(ventilator => {                        
                return res.json({
                    status: true,
                    ventilator: ventilator
                });
            }).catch(e => res.json(e));
        })

    //DELETE VENTILATORS BY VENTILATOR ID
    .delete((req, res, next) => {
        Ventilator.deleteOne({ventilatorId: req.params.ventilatorId})
            .then(ventilator => {
                return res.json({
                    status: true,
                    ventilator: ventilator
                });
            }).catch(e => res.json(e));
    });
module.exports = router;
