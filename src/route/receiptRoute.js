const express = require("express");
const ReceiptController = require("../controllers/ReceiptController");
const ReceiptValidator = require("../validator/ReceiptValidator");
const router = express.Router();
const auth = require("../middlewares/auth");

const receiptController = new ReceiptController();
const receiptValidator = new ReceiptValidator();

router.get("/", auth(), receiptController.getAll);
router.get("/one/:uuid", auth(), receiptController.getOne);
router.post("/create/tki", auth(), receiptValidator.createReceiptTKIValidator, receiptController.createReceiptTKI);
router.post("/update/tki/:uuid", auth(), receiptValidator.updateReceiptTKIValidator, receiptController.updateReceiptTKI);
router.delete("/delete/:uuid", auth(), receiptController.deleteReceipt);

module.exports = router;
