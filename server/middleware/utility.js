const ObjectId = require('mongoose').Types.ObjectId;

exports.isValidId = (req,res,next) => {
    if(ObjectId.isValid(req.params.id) == false){
        res.status(400).json("Error Id is not valid");
    }else{
        next();
    }
};

exports.error404NotFound = (req,res) => {
    return res.status(404).json({ error: "No user found with id " + req.params.id});
};

exports.ErrorHandler = (error, req,res) => {
    return res.status(500).json({error});
};