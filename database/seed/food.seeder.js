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
  for (const food of foods) {
    await Food.create(food);
  }
  console.log("[i] Food seeder finished!");
})();
