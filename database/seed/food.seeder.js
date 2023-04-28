const Food = require("../models/food.model");

const foods = [
  {
    name: "Burger",
    price: 10000,
  },
  {
    name: "Pizza",
    price: 50000,
  },
  {
    name: "Hotdog",
    price: 20000,
  },
];

(async () => {
  try {
    await Food.bulkCreate(foods);
    console.log("[i] Food seeder finished!");
  } catch (error) {
    console.error("[-] Unable to connect to the MySQL database:", error);
    process.exit(1);
  } finally {
    process.exit(0);
  }
})();
