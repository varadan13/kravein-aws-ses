{
  order.adjustments && (
    <>
      <FlexRows justify="space-between">
        <Text
          color="primaryColor"
          weight="semibold"
          size="smedium"
          paddingBottom="0.2">
          Price Adjustments
        </Text>
        <Text
          color="primaryColor"
          weight="semibold"
          size="smedium"
          paddingBottom="0.2">
          {order.billing.adjustment_amount < 0
            ? `- $${Math.abs(order.billing.adjustment_amount).toFixed(2)}`
            : `${formatCurrency(order.billing.adjustment_amount)}`}
        </Text>
      </FlexRows>
      {/* <FlexRows justify="space-between">
        <Text weight="semibold" size="smedium" paddingBottom="0.2">
          Reason for Price Adjustments
        </Text>
      </FlexRows>
      <FlexRows justify="space-between">
        <Text weight="medium" size="smedium" paddingBottom="0.2">
          {order.adjustments[order.adjustments.length - 1].note}
        </Text>
      </FlexRows> */}
    </>
  );
}
{
  !!(order.billing.deal_discount && order.billing.deal_discount !== 0) && (
    <FlexRows justify="space-between">
      <Text
        color="primaryColor"
        weight="semibold"
        size="smedium"
        paddingBottom="0.2">
        Promo
      </Text>
      <Text
        color="primaryColor"
        weight="semibold"
        size="smedium"
        paddingBottom="0.2">
        {order.billing.deal_discount < 0
          ? `- $${Math.abs(order.billing.deal_discount).toFixed(2)}`
          : `${formatCurrency(order.billing.deal_discount)}`}
      </Text>
    </FlexRows>
  );
}

{
  Array.isArray(order?.billing?.charges_list) &&
    order.billing.charges_list
      .filter(
        (charges) =>
          !charges.is_payment_gateway_fee &&
          charges.is_payment_gateway_fee !== null
      )
      .filter((charges) => {
        const tempValue = parseFloat(charges.value);
        return tempValue !== 0 && !isNaN(tempValue);
      })
      .map((charges) => ({
        title: charges.name,
        amount: formatCurrency(charges.value),
      }));
}
{
}
{
  !!order?.billing?.payment_gateway_fee && (
    <FlexRows justify="space-between">
      <Text weight="medium" size="smedium" paddingBottom="0.2">
        Card Processing Fee
      </Text>
      <Text weight="medium" size="smedium" paddingBottom="0.2">
        {formatCurrency(order.billing.payment_gateway_fee)}
      </Text>
    </FlexRows>
  );
}
{
  order.billing.order_total && order.billing.order_total !== 0 && (
    <FlexRows justify="space-between">
      <Text weight="semibold" size="medium" paddingBottom="0.2">
        Total
      </Text>
      <Text weight="semibold" size="smedium" paddingBottom="0.2">
        {formatCurrency(order.billing.order_total)}
      </Text>
    </FlexRows>
  );
}

const charges = (order) => {
  const temp = [];
  if (order.billing.sub_total && order.billing.sub_total !== 0) {
    temp.push({
      title: "Items subtotal",
      amount: formatCurrency(order.billing.sub_total),
    });
  }

  if (order.billing.delivery_fee && order.billing.delivery_fee !== 0) {
    temp.push({
      title: "Delivery fee",
      amount: formatCurrency(order.billing.delivery_fee),
    });
  }

  if (!!order?.billing?.payment_gateway_fee) {
    temp.push({
      title: "Card Processing Fee",
      amount: formatCurrency(order.billing.payment_gateway_fee),
    });
  }

  if (order.billing.order_total && order.billing.order_total !== 0) {
    temp.push({
      title: "Total",
      amount: formatCurrency(order.billing.order_total),
    });
  }

  const temp2 = [
    ...temp,
    ...(
      (Array.isArray(order?.billing?.charges_list) &&
        order?.billing?.charges_list) ||
      []
    )
      .filter(
        (charges) =>
          !charges.is_payment_gateway_fee &&
          charges.is_payment_gateway_fee !== null
      )
      .filter((charges) => {
        const tempValue = parseFloat(charges.value);
        return tempValue !== 0 && !isNaN(tempValue);
      })
      .map((charges) => ({
        title: charges.name,
        amount: formatCurrency(charges.value),
      })),
    ...(
      (Array.isArray(order?.billing?.surcharge_list) &&
        order.billing.surcharge_list) ||
      []
    )
      .filter((charges) => charges.charge)
      .map((charges) => ({
        title: charges.name,
        amount: formatCurrency(charges.charge),
      })),
  ];
};
