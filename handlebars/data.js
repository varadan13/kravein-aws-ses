export default {
  menu_order_id: "47eb2b85-1d6c-46cb-a889-ecb2be24af5e",
  table_name: null,
  table_number: null,
  place_id: "a1f61e74-2939-4e31-88dd-09208d29a4e1",
  service_type: "Delivery",
  service_type_setting_id: "b9faf94b-837a-4117-be84-932c1c2c2c07",
  menu_id: "f792f553-9737-4a33-a072-23a8411bc455",
  menu_name: "Delivery Menu",
  status: "RECEIVED",
  slug: null,
  order_reference: "KABBGF2542",
  payment: {
    payment_method: "CASH",
    payment_method_id: null,
    payment_intent_id: null,
    payment_status: "pending",
    payment_card: null,
    payment_at: null,
    __typename: "MenuOrderPayment",
  },
  no_of_attendees: null,
  pickup_method: null,
  vehicle_information: null,
  address: {
    address_id: "d10f7f04-a5ea-4b46-82c5-dc30a7720c41",
    type: "",
    is_default: true,
    contact_name: "",
    contact_phone: "",
    address_line_1: "Arrival Drive",
    address_line_2: "",
    city: "Melbourne Airport",
    state: "Victoria",
    country: "Australia",
    post_code: "3045",
    latitude: "-37.6708141",
    longitude: "144.8429718",
    status: "ACTIVE",
    delivery_option: {
      type: "DELIVERY_TO_DOOR",
      caption: null,
      __typename: "DeliveryOption",
    },
    __typename: "UserAddress",
  },
  audit: {
    created_at: "2024-03-06T03:57:55.733Z",
    updated_by: "0aa3c85a-f8c1-44be-b0e0-68545817ee5e",
    updated_at: "2024-03-06T04:03:47.190Z",
    __typename: "Audit",
  },
  include_cuttlery: null,
  charges: null,
  billing: {
    sub_total: 38,
    delivery_fee: 5,
    order_total: 47.66,
    charge: 0.76,
    order_amount: 47.66,
    place_charges: null,
    tax: null,
    disbursement: null,
    __typename: "MenuOrderBilling",
  },
  received: {
    created_by: "0aa3c85a-f8c1-44be-b0e0-68545817ee5e",
    created_at: "2024-03-06T04:03:49.296Z",
    status: "RECEIVED",
    user_type: "USER",
    note: null,
    __typename: "MenuOrderStatusLog",
  },
  confirmed: null,
  ready: null,
  complete: null,
  cancelled: null,
  group_order: null,
  expiry_time: null,
  limit_per_invitee: null,
  max_line_item_per_invitee: null,
  guest_view: null,
  estimated_completion_time: null,
  estimates: [
    {
      type: "preparation_estimate",
      value_in_mins: 15,
      __typename: "MenuOrderEstimates",
    },
    {
      type: "delivery_estimate",
      value_in_mins: 15,
      __typename: "MenuOrderEstimates",
    },
  ],
  adjustments: null,
  overall_quantity: 2,
  large_order: false,
  contact_less_delivery: null,
  sales_method: "ONLINE",
  food_setup_required: null,
  contact: {
    contact_name: "Aneesh Varadan",
    contact_phone: "+61 444444444444",
    __typename: "MenuOrderContact",
  },
  line_item: [
    {
      item_link_id: "78b5dfa1-2e56-4d95-ab40-f35ae21b90ab",
      menu_item_id: "ee2b40b2-68b6-4b35-8afe-cc463a1d8d1b",
      prompt_id: "ac4b7f9c-63c4-45a9-bbe5-a7e3c0393fe4",
      variant_id: "3015d8e6-4af2-4772-b282-275e019ea9a6",
      original_price_per_item: null,
      variant_name: "chicken ",
      name: "Noodles",
      quantity: 2,
      price_per_item: 12,
      net_price_per_item: 10.81,
      tax_per_item: 1.19,
      price: 24,
      tax: 2.38,
      overall_price: 38,
      modifier: [
        {
          modifier_group_id: "1b69fbf3-2c21-4c1e-be7d-69e8258336f9",
          menu_item_id: "52ca9d84-a7ac-46b2-b690-c0b9b9e08ffa",
          prompt_id: null,
          variant_id: null,
          variant_name: null,
          name: "Soya sauces",
          quantity: 1,
          price_per_item: 2,
          net_price_per_item: 1.8,
          tax_per_item: 0.2,
          price: 4,
          tax: 0.4,
          __typename: "LineItemModifier",
        },
        {
          modifier_group_id: "1b69fbf3-2c21-4c1e-be7d-69e8258336f9",
          menu_item_id: "7c3533ac-2f59-420a-b229-353c8db498c6",
          prompt_id: null,
          variant_id: null,
          variant_name: null,
          name: "Chilly Sauces",
          quantity: 1,
          price_per_item: 5,
          net_price_per_item: 4.5,
          tax_per_item: 0.5,
          price: 10,
          tax: 1,
          __typename: "LineItemModifier",
        },
      ],
      menu_item_rating: null,
      special_request: null,
      user_id: null,
      caption: null,
      private: null,
      sold_out: "CONTACT_ME",
      __typename: "LineItem",
    },
  ],
  error: null,
  __typename: "MenuOrder",
};
