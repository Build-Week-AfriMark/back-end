const db = require('../data/db-config');

function getAll() {
    return db("items");
}



async function addItem(item) {
    return db('items').insert(item, 'id').then(([id]) => {
      console.log(id, "id")
      return findById(id)
  
   })
  }


async function findById(id) {
  console.log("id", id)
  const item = await db("items")
    .where({ id })
    .first();
  console.log("item", item)
  return item
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
    // getItemById,
    findById,
    updateItem,
    deleteItem,
    find,
}