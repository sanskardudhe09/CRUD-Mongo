const express = require('express');
const conn = require('./connection.js');
const router = require('./routes/routes.js');
const cors = require('cors');
app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);
conn().then(()=>{
    console.log("Connected to MongoDB Successfully!!");
}).catch((err)=>{
    console.log(err);
});
app.listen(8000, (req,res)=>{
    console.log("Server is listening on port 8000");
})