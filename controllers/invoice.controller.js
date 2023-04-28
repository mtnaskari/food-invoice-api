const { httpResponse } = require("../utils/http-responses");

const {
  createInvoiceService,
  readInvoiceService,
} = require("../services/invoice.service");

const createInvoice = async (req, res) => {
  const { foodIds, studentId } = req.body;
  const result = await createInvoiceService(foodIds, studentId);

  return httpResponse.created(res, result);
};

const readInvoice = async (req, res) => {
  const { invoiceId } = req.params;
  const result = await readInvoiceService(invoiceId);

  return httpResponse.created(res, result);
};

module.exports = {
  createInvoice,
  readInvoice,
};
