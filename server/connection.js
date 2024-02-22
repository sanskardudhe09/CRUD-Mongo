const mongoose = require('mongoose');
const process = require('process');
const uri = process.env.MONGO_URI;
module.exports = ()=>{
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
};
