const express = require("express")

const controller = require("../controller/controller")

const router = express.Router()

router.get("/", controller.getTasks)

router.post("/", controller.postTask)

router.put("/:taskId", controller.updateTask)

module.exports = router
