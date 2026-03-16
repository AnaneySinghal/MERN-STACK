const express =require("express")

const router =express.Router();

const userController =require("../controllers/user")

route.get("/users",userController.getUsers)
route.get("/user/:id",userController.getUsersById)
route.post("/add/users",userController.addUsers)

module.exports =router
