const userModel = require("../model/model.js");
const {userCrudOperation} = require('../controller/apiservices.js');
const userCrud = userCrudOperation(userModel);
const {isValidId, error404NotFound} = require('../middleware/utility.js');
const express = require('express');
const router = express.Router();
router.post("/createuser", (req,res)=>{
     userCrud.createUser(req.body).then((ans)=>{
        console.log(ans);
        res.status(201).json(ans);
     }).catch((err)=>{
        res.status(500).send(err);
     })
});

router.get("/getuser/:id", isValidId, (req,res,next)=>{
    userCrud.getUser(req.params.id).then((ans)=>{
        if(ans) res.status(200).json(ans);
        else error404NotFound(req,res);
    }).catch((err)=>{
        res.status(500).json(err);
    })
});

router.get("/getalluser", (req,res,next)=>{
    userCrud.getAllUser().then((ans)=>{
        if(ans) res.status(200).send(ans);
    }).catch((err) => res.status(500).json(err));
});

router.put("/updateuser/:id", isValidId, (req,res,next) => {
    userCrud.updateUser(req.params.id, req.body).then((ans)=>{
        if(ans) res.status(200).json(ans);
        else error404NotFound(req,res);
    }).catch((err) => res.status(500).json(err));
})

router.delete("/deleteuser/:id", isValidId, (req,res,next)=>{
    userCrud.deleteUser(req.params.id).then((ans) => {
        if(ans) res.status(200).json(ans)
        else error404NotFound(req,res)
    }).catch((err) => res.status(500).json(err));
})
module.exports = router;