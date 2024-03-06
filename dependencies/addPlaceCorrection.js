const obj = {
  whatsWrong: "SOmething is wrong with this place",
  placeInfo:
    "Culinary Delights Restaurant<br>123 Main Street<br>Cityville, State 54321 Country",
  business_types: "Dining",
  service_category: "Pickup, Dinein",
  feature_types: "Good Ambience, Awesome place",
  cuisine_style: "Indian, Kerala",
  good_for: "Kerala Banana Food",
  other_details: "Something is wrong witht this palce",
};

console.log(atob(JSON.stringify(obj)));
