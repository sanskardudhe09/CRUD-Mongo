const mongoose = require('mongoose');
const uri = "mongodb+srv://admin:1234@cluster0.gomanfy.mongodb.net/user_db?retryWrites=true&w=majority";
module.exports = ()=>{
    return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
};
