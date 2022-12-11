const express = require("express");
const courseSchema = require("../models/course");
const router = express.Router();



router.post('/courses', (req, res) =>{
    const course = courseSchema(req.body);
    course.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
});

router.get('/courses', (req, res) =>{
    courseSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
   });



router.get("/courses/:id", (req, res) =>{
    const {_id} = req.params;
    courseSchema
    .findById(_id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
   });


router.put("/courses/:id", (req, res) =>{
    const {id} = req.params;
    const {name, description, price, lenguage} = req.body;
    courseSchema
    .updateOne({ _id: id},{$set: {name, description, price, lenguage}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
   });   

router.delete("/courses/:id", (req, res) =>{
    const {id} = req.params;
    courseSchema
    .findOneAndRemove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
   });
module.exports = router;
