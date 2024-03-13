[
  {
    variant_name: "chicken ",
    name: "Noodles",
    quantity: 2,
    price_per_item: 12,
    overall_price: 38,
    modifier: [
      { name: "Soya sauces", quantity: 1, price_per_item: 2 },
      { name: "Soya sauces", quantity: 1, price_per_item: 2 },
    ],
  },
];
/*
<div>
  <div>
    <div style="color: #4a4a4a; font: 14.4px">
      <p>1 CRISPY CHICKEN SUPREME $29.00</p>
    </div>
    <div style="color: #737373; font: 12.8px">
      <p>CRISPY CHICKEN SUPREME ( $15.00 )</p>
      <p>Chilli Sauce ( $5.00 x 2)</p>
      <p>Tomato sauce ( $2.00)</p>
      <p>Tomato sauce ( $2.00)</p>
    </div>
  </div>
</div>
*/

[
  {
    variant_name: "chicken ",
    name: "Noodles",
    quantity: 2,
    price_per_item: 12,
    overall_price: 38,
    modifier: [
      { name: "Soya sauces", quantity: 1, price_per_item: 2 },
      { name: "Soya sauces", quantity: 1, price_per_item: 2 },
    ],
  },
].map((ele) => (
  <div>
    <div>
      <div style="color: #4a4a4a; font: 14.4px">
        <p>
          {ele.quantity} {ele.name} {$parseFloat(29.0).toFixed(2)}
        </p>
      </div>
      <div style="color: #737373; font: 12.8px">
        {ele.variant_name ? (
          <p>
            {ele.variant_name} ( ${parseFloat(ele.price_per_item).toFixed(2)} x{" "}
            {ele.quantity} )
          </p>
        ) : (
          <p>
            {ele.name} ( ${parseFloat(ele.price_per_item).toFixed(2)} x{" "}
            {ele.quantity} )
          </p>
        )}
        {ele.modifier[0] &&
          ele.modifier.map((ele2) => (
            <>
              <p>
                {ele.name} ( ${parseFloat(ele.price_per_item).toFixed(2)} x{" "}
                {ele.quantity} )
              </p>
            </>
          ))}
      </div>
    </div>
  </div>
));
