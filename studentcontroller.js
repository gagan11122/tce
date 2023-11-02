const studentModel=require("../models/studentModel");
const validation = require("./validator.js");
const jwt=require("jsonwebtoken");
//Post data Register student
let createStudent= async(req,res)=>{
    try {
        let data = req.body
        let {Name, Usn, Gender, Email, Mobile, Password}=data;
        if(!validation.isValidBody(data)){
            return res.status(400).send({status: false,msg:"No data provided"});
        }
        //Name Validation
        if(!validation.isValid(Name)){
            return res.status(400).send({status: false,msg:"Please Enter your name"});
        }
        if(!validation.isValidName.test(Name)){
            return res.status(400).send({status: false,msg:"Enter Valid Name"});
        }
        //Usn validation
        if(!validation.isValid(Usn)){
            return res.status(400).send({status: false,msg:"Please Enter your Usn"});
        }
        let dupUsn = await studentModel.findOne({Usn});
        if(dupUsn){
            return res.status(400).send({msg:"USN Already exists"});
        }
        //Gender
        if(!validation.isValid(Gender)){
            return res.status(400).send({status: false,msg:"Please Enter your Gender"});
        }
        //Email
        if(!validation.isValid(Email)){
            return res.status(400).send({status: false,msg:"Please Enter your Email"});
        }
        if(!validation.isValidEmail.test(Email)){
            return res.status(400).send({status: false,msg:"Enter Valid Email"});
        }
        let dupEmail = await studentModel.findOne({Email});
        if(dupEmail){
            return res.status(400).send({msg:"Email Already exists"});
        }
        //Mobile
        if(!validation.isValid(Mobile)){
            return res.status(400).send({status: false,msg:"Please Enter your Mobile"});
        }
        if(!validation.isValidMobile.test(Mobile)){
            return res.status(400).send({status: false,msg:"Enter Valid Mobile"});
        }
        let dupnum = await studentModel.findOne({Mobile});
        if(dupnum){
            return res.status(400).send({msg:"Mobile No Already exists"});
        }
        //Password
        if(!validation.isValid(Password)){
            return res.status(400).send({status: false,msg:"Please Enter your Password"});
        }
        let registerStudent = await studentModel.create(data)
        return res.status(201).send({status:true, 
                                  msg:"Student data registered succesfully",
                                  data:registerStudent});
    } catch (error) {
        return res.status(500).send({status:false,
                                      msg:"Internal Server Error"});
    }
};

let loginStudent= async(req,res)=>{
    try {
        let data=req.body
        if(!validation.isValidBody(data)){
            return res.status(404).send({status:false,msg:"No data provided"});
        }
        let {Email,Password } =data;
        if(!validation.isValid(Email)){
            return res.status(404).send({status:false,msg:"Please enter your email"});
        }
        if(!validation.isValid(Password)){
            return res.status(404).send({status:false,msg:"Please enter your password"});
        }
        let matchStudent=await studentModel.findOne({Email,Password});
        if(!matchStudent){
            return res.status(200).send({msg:"Student not Registere"});
        }else{
            const token=jwt.sign(
                {
                    studentId: matchStudent._id.toString(),
                },
                "MERN STACK",
                {
                    expiredIn:"20000sec",
                }
            );
        return res.status(200).send({msg:"Student logged in Successfukly",token});
        }
    } catch (error) {
        return res.status(500).send({status:false,
                                    msg:"internal server error"});
    }
}

module.exports = {createStudent, loginStudent};