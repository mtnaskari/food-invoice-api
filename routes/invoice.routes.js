const express = require("express");
const router = express.Router();
const {
  createInvoice,
  readInvoice,
} = require("../controllers/invoice.controller");

router.get("/:invoiceId?", readInvoice);
router.post("/", createInvoice);

module.exports = router;
