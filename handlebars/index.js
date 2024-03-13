const fs = require("fs");
const handlebars = require("handlebars");

const templateSource = fs.readFileSync("lineItems.hbs", "utf8");

const template = handlebars.compile(templateSource);

const data = {
  items: [
    {
      variant_name: "chicken",
      name: "Noodles",
      quantity: 2,
      price_per_item: 12.0,
      overall_price: 38.0,
      modifier: [
        { name: "Soya sauces", quantity: 1, price_per_item: 2.0 },
        { name: "Soya sauces", quantity: 1, price_per_item: 2.0 },
      ],
    },
  ],
};

const result = template(data);

console.log(result);

fs.writeFileSync("output.html", result);
