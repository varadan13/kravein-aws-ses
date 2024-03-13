export default {
  menu_order_id: "2157facc-dc25-4a36-920f-f6e173c140fa",
  table_name: null,
  table_number: null,
  place_id: "a1f61e74-2939-4e31-88dd-09208d29a4e1",
  service_type: "Pickup",
  service_type_setting_id: "512560dc-fb2e-43af-ac8b-f8a27f3e1eff",
  menu_id: "3f56a217-53c4-470e-8606-105d4d270ed9",
  menu_name: "Pick you special food",
  status: "RECEIVED",
  slug: null,
  order_reference: "KAEPYQ4968",
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
    address_id: null,
    type: null,
    is_default: null,
    contact_name: null,
    contact_phone: null,
    address_line_1: "23 Melbourne Place",
    address_line_2: "",
    city: "Melbourne",
    state: "Victoria",
    country: "Australia",
    post_code: "3000",
    latitude: "-37.8133036",
    longitude: "144.9688303",
    status: null,
    delivery_option: {
      type: null,
      caption: null,
      __typename: "DeliveryOption",
    },
    __typename: "UserAddress",
  },
  audit: {
    created_at: "2024-03-08T06:33:34.419Z",
    updated_by: "0aa3c85a-f8c1-44be-b0e0-68545817ee5e",
    updated_at: "2024-03-08T06:33:50.815Z",
    __typename: "Audit",
  },
  include_cuttlery: null,
  charges: null,
  billing: {
    sub_total: 150,
    delivery_fee: null,
    order_total: 179.5,
    charge: 21.5,
    order_amount: 179.5,
    place_charges: null,
    tax: null,
    disbursement: null,
    __typename: "MenuOrderBilling",
  },
  received: {
    created_by: "0aa3c85a-f8c1-44be-b0e0-68545817ee5e",
    created_at: "2024-03-08T06:33:53.299Z",
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
  ],
  adjustments: null,
  overall_quantity: 6,
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
      item_link_id: "22b40c26-e1b6-4cbb-8295-609a2d9ac409",
      menu_item_id: "6667359b-5ac8-4888-8f4f-85afbcde5b5e",
      prompt_id: null,
      variant_id: null,
      original_price_per_item: null,
      variant_name: null,
      name: "Grill chicken",
      quantity: 6,
      price_per_item: 25,
      net_price_per_item: 22.52,
      tax_per_item: 2.48,
      price: 150,
      tax: 14.879999999999999,
      overall_price: 150,
      modifier: null,
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
