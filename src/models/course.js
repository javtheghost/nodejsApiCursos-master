const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
name:{
    type: String,
    required: true
},
description:{
    type: String,
    required: true
},
price:{
    type: String,
    required: true
},
lenguage:{
    type: String,
    required: false
},
image:{
    type: String,
    required: false
}
});

module.exports = mongoose.model('course', courseSchema);