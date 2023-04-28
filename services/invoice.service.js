const Invoice = require("../database/models/invoice.model");
const Food = require("../database/models/food.model");
const Student = require("../database/models/student.model");

const { randomBytes } = require("crypto");

/**
 * Create a new Invoice
 */
const createInvoiceService = async (foodIds, studentId) => {
  const trackingCode = randomBytes(8).toString("base64");
  const invoice = await Invoice.create({
    trackingCode,
    studentId,
  });

  const foods = await Food.findAll({
    where: {
      id: foodIds,
    },
  });

  await invoice.addFood(foods);

  return invoice;
};

/**
 * Read invoice if params exist and return all invoices if not
 */
const readInvoiceService = async (invoiceId) => {
  const result = !!invoiceId
    ? await Invoice.findByPk(invoiceId, {
        include: [Food, Student],
      })
    : await Invoice.findAll();

  return result;
};

module.exports = {
  createInvoiceService,
  readInvoiceService,
};
