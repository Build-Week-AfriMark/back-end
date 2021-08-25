const db = require('../data/db-config');

function getAll() {
    return db("items");
}

function addItem(item) {
    return db("items")
      .insert(item, "id");
}

function getItemById(id) {
    return db("items")
      .where({ id })
      .first();
}

function getItemsByCategory(category) {
    return db("items")
      .where({ category }) 
}

function updateItem(id, updates) {
    return db("items")
      .where({ id })
      .update(updates);
}

  function deleteItem(id) {
    return db("items")
      .where({ id })
      .del();
}

  function find(category) { 
    const query = db('items').select('id', 'name', 'category');
    if(category === null){
      return query
    } else if (category) {
      query.where({ category });
    }
    return query;
  }

module.exports = {
    getAll,
    addItem,
    getItemsByCategory,
    getItemById,
    updateItem,
    deleteItem,
    find,
}