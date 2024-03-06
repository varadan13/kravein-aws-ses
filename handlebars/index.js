const fs = require("fs");
const handlebars = require("handlebars");
const t = require("./data");

// Read the Handlebars template file
const templateSource = fs.readFileSync("emailTemplate.hbs", "utf-8");

// Compile the template
const template = handlebars.compile(templateSource);

// Provide data to the template
const data = {
  place: t.place,
  menu: {
    service_type: t.service_type_setting.service_type,
    order_reference: t.order_reference,
    created_at: "2024-03-06",
  },
};

// Render the template with the data
const html = template(data);

console.log(html);
