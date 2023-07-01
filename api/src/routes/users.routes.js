const { Router } = require("express")
const multer = require("multer")

const uploadConfig = require("../configs/upload")
const UsersControllers = require("../controllers/UsersControllers")
const UserAvatarController = require("../controllers/UserAvatarController")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router()
const upload = multer(uploadConfig.MULTER)

const userController = new UsersControllers()
const userAvatarController = new UserAvatarController()

usersRoutes.post("/", userController.create)
usersRoutes.put("/", ensureAuthenticated, userController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)

module.exports = usersRoutes