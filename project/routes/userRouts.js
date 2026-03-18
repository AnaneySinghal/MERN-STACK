const express =require("express")

const router =express.Router();

// const userController =require("../controllers/user")

// route.get("/users",userController.getUsers)

// route.get("/user/:id",userController.getUsersById)
// route.post("/add/users",userController.addUsers)

router.get("/users",userController.getUsers);
router.post("/users",userController.addUsers);

router.route("/users").get(userController.getUsers).post(userController.addUsers);

router.get("/users/:id",userController.getUsersById);

module.exports =router
