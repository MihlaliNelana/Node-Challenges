const express = require('express');
const router = express.Router();
const Visits = require('../models/Visit.model');

//ROUTES
    //get posts(visits) route
router.get('/', async (req, res)=>{
    try{
        const visit = await Visits.find();
        res.json(visit);
    }catch(err){
        res.json({message: err});
    }
});

//post to database route
router.post('/', async (req, res) =>{
    const visit = new Visits({
        visitorName: req.body.visitorName,
        assistantName: req.body.assistantName,
        visitorAge: req.body.visitorAge,
        visitDate: req.body.visitDate,
        visitTime: req.body.visitTime,
        visitorComment: req.body.visitorComment
    });
    try{
       const savedVisit = await visit.save();
        res.json(savedVisit);
    } catch (err){
        res.status(404).json({message: err});
    }

    //test response
    // res.send("Post Method!")
    // console.log(req.body)
});

//get visit by id
router.get('/:visitId', async (req, res) =>{
    try{
        const visit = await Visits.findById(req.params.visitId);
        res.json(visit);
    }catch(err){
        res.json({message: err});
    }
})

//delete visit by id
router.delete('/:visitId', async(req, res)=>{
    try{
        const deleteVisit = await Visits.deleteOne({_id: req.params.visitId});
        res.json(deleteVisit);
    } catch(err){
        res.json({message: err})
    }
});

//delete all visits
router.delete('/', async(req, res)=>{
    try{
        const deleteAllVisits = await Visits.deleteMany()
        res.json(deleteAllVisits)
    }catch(err){
        res.json({message: err})
    }
})

//UPDATE A VISIT
router.patch('/:visitId', async (req, res)=>{
    try{
        const updateVisit = await Visits.update(
            {_id: req.params.visitId}, 
            {
                $set: { visitorAge: req.body.visitorAge }
            }
        )
        res.json(updateVisit);
    }catch(err){
        res.json({message: err});
    }
})

module.exports = router;