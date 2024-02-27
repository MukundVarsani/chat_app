const userModel = require("../Model/user.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const validator = require('validator');

const createToken = (_id) =>{

    const jwtKey = "hello123";

    return jwt.sign({_id}, jwtKey);


}

const registerUser = async(req, res) => {


    try {
     
        const {name, email, password} = req.body;

        let user = await userModel.findOne({email});
        console.log("first");
        console.log(req.body);

        if(user) return res.status(400).json("user alredy exists");
        console.log("user pass");
        if(!name || !email || !password) return res.status(400).json("All fields are required");
        console.log("null check");
        // if(!validator.isEmail(email)) return res.status(400).json("Email must be valid email..");
        console.log("email pass");
        // if(!validator.isStrongPassword(password)) return res.status(400).json("Password must be strong enough");
        console.log("password pass");
      
        user = new userModel({name , email , password});
   
        console.log("model");
        console.log(user);

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(user.password , salt);

        // await user.save();

        const token = createToken(user._id);  

        console.log("last");
        console.log(user);

        res.status(400).json({_id : user._id, name, email, token });

    } catch (error) {
        console.log(error);
        return res.status(200).json(error);
    }
}

const loginUser = async (req,res)=>{

    try {
        
    const { email , password} = req.body;

    if(!email || !password) return res.status(400).json("Fill all field");

    if(!validator.isEmail(email)) return res.status(400).json("Enter valid email");

    let user = await userModel.findOne({email});

    if(!user) {
        return res.status(400).json("User not found");
    }else{
        const isValidPassword = await bcrypt.compare(password , user.password);
    
        if(!isValidPassword) return res.status(400).json("Wrong password");
    }

    const token = createToken(user._id)
    return res.status(200).json({ _id : user._id , name : user.name , email : user.email, token});
} catch (error) {
    console.log(error);
    return res.status(400).json(error);
}

}

const findUser = async (req, res) =>{

    const userID = req.params.id;
        try {
            
            const user = await userModel.findById(userID);
            return res.status(200).json(user);
        } catch (error) {
            console.log(error);
            return res.status(400).json(error)
        }
}

const findAllUser = async(req ,res) =>{

    const user = await userModel.find();

    return res.status(200).json(user);
}

module.exports = {registerUser, loginUser ,findUser, findAllUser};