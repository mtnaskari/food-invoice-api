const Invoice = require("../database/models/invoice.model");
const Food = require("../database/models/food.model");

const { randomBytes } = require("crypto");

const createInvoice = async (foodIds, studentId) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createInvoice,
};
