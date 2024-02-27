const express = require("express");
const { registerUser, loginUser, findUser, findAllUser } = require("../Controllers/user.controllers");

const router = express.Router();


router.post("/register" ,registerUser);
router.post("/login" ,loginUser);
router.get("/find/:id" ,findUser);
router.get("/" ,findAllUser);


module.exports = router;