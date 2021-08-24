

exports.seed = function(knex) {
  return knex('items').insert([
    {name: 'Joshua Tree Coffee Beans', description: "seed testing data", price: 9, location: "Los Angeles, CA.", category: "Pantry", user_id: 2},
    {name: 'Hunter x Hunter Anime Hoodie', description: "Anime inspired pullover, with phantom troupe character images printed on back", price: 40, location: "Houston, TX.", category: "Fashion", user_id: 5},
    {name: 'Blue Corn Tortilla Mix', description: "Maseca made with blue maiz", price: 12, location: "Houston, TX.", category: "Pantry", user_id: 3},
    {name: 'Farfalle Protein Pasta', description: "Pasta with great macros", price: 5, location: "Palm Springs, CA.", category: "Pantry", user_id: 3},
    {name: 'MacBook Air 13 inch', description: "used MacBook Air 13in. in good condition, model:2018", price: 500, location: "Miami, FL.", category: "Technology", user_id: 4},
    {name: 'iPhone 6', description: "pre-owned iPhone 6, in okay condition, well loved, 64gb", price: 140, location: "Miami, FL.", category: "Technology", user_id: 4},
    {name: 'Coffee(Arabic)', description: "Dark Roast Gourmet Coffee", price: 13, location: "New York City, NY.", category: "Pantry", user_id: 5},
    {name: '', description: "seed testing data", price: 9, location: "Cape Town", category: "Peas", user_id: 1},
    {name: 'Embroidery Satchel', description: "Trendy hand embroidered satchel with red and yellow roses.", price: 6, location: "Monterrey, NL.", category: "Fashion", user_id: 5},
    {name: 'Classic Mens Long Sleeve', description: "100% cotton black long sleeve, v neck, size medium", price: 6, location: "New York City, NY.", category: "Fashion", user_id: 5},
    {name: 'Mens Daily Vitamins', description: "Men's One-a-day daily vitamins", price: 9, location: "Los Angeles, CA.", category: "Wellness", user_id: 1}
  ]);
};