const db = require('../data/db-config');

function find() {
    return db("users").select('username', 'user_id');
}

function findBy(filter){
    return db("users")
    .where(filter)
    .first()  
}
async function findById(user_id) {
    console.log("user_id", user_id)
    const user = await db("users")
      .where({ user_id })
      .first()
    .select('username', 'user_id');
    console.log("user",user)
    return user
}

function getUsername(username) {
    return db("users")
    .where({username})
    .first()
}
     
 async function add(user) {
return db('users').insert(user, 'user_id').then(([user_id]) => {
    console.log(user_id, "user_id")
    return findById(user_id)

 })
}


module.exports = {
    find,
    findBy,
    findById,
    add,
    getUsername
}