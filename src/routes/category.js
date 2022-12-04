const express = require("express");
const categorySchema = require("../models/category");
const router = express.Router();


router.post('/categories', (req, res) =>{
    const category = categorySchema(req.body);
    category.save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

router.get('/categories', (req, res) =>{
    categorySchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
   });



router.get("/categories/:id", (req, res) =>{
    const {id} = req.params;
    categorySchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
   });


router.put("/categories/:id", (req, res) =>{
    const {id} = req.params;
    const {name} = req.body;
    categorySchema
    .updateOne({ _id: id},{$set: {name}})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
   });   

router.delete("/categories/:id", (req, res) =>{
    const {id} = req.params;
    categorySchema
    .remove({ _id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
   
   });
module.exports = router;
