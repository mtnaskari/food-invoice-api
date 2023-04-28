const { createInvoice } = require("../services/invoice.service");

const createInvoice = async (req, res) => {
  try {
    const { foodIds, studentId } = req.body;

    const invoice = await createInvoice(foodIds, studentId);

    return res.status(201).json({ invoice });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createInvoice,
};
