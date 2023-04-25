const Invoice = require("../database/models/invoice.model");
const Food = require("../database/models/food.model");
const Student = require("../database/models/student.model");

const createInvoice = async (req, res) => {
  try {
    const { studentId, foodIds, trackingCode } = req.body;

    const foods = await Food.findByPk(foodIds);

    const invoice = await Invoice.create({
      trackingCode,
      studentId,
    });

    await invoice.addFood(foods);

    return res.status(201).json({ invoice });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createInvoice,
};
