const express = require("express");
const TodoController = require("../controllers/todo")
const router = express.Router();

router.get("/", TodoController.getAllItems);
router.post("/", TodoController.createItem);
router.get("/:id", TodoController.viewItem);
router.delete("/:id", TodoController.deleteItem);
router.patch("/:id", TodoController.updateItem);

module.exports = router;
