const handlebars = require('handlebars');

const templateSource = `
{{#each items}}
  <div>
    <div>
      <div style="color: #4a4a4a; font: 14.4px">
        <p>
          {{this.quantity}} {{this.name}} ${{this.overall_price.toFixed(2)}}
        </p>
      </div>
      <div style="color: #737373; font: 12.8px">
        {{#if this.variant_name}}
          <p>
            {{this.variant_name}} ( ${{this.price_per_item.toFixed(2)}} x {{this.quantity}} )
          </p>
        {{else}}
          <p>
            {{this.name}} ( ${{this.price_per_item.toFixed(2)}} x {{this.quantity}} )
          </p>
        {{/if}}
        {{#if this.modifier}}
          {{#each this.modifier}}
            <p>
              {{this.name}} ( ${{this.price_per_item.toFixed(2)}} x {{../quantity}} )
            </p>
          {{/each}}
        {{/if}}
      </div>
    </div>
  </div>
{{/each}}
`;

const compiledTemplate = handlebars.compile(templateSource);

const data = {
  items: [
    {
      variant_name: "chicken",
      name: "Noodles",
      quantity: 2,
      price_per_item: 12,
      overall_price: 38,
      modifier: [
        { name: "Soya sauces", quantity: 1, price_per_item: 2 },
        { name: "Soya sauces", quantity: 1, price_per_item: 2 },
      ],
    },
    // Add more items if needed
  ],
};

const result = compiledTemplate(data);

console.log(result);
