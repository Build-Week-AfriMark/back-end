const db = require('../data/db-config');

function find() {
    return db("users");
}

function findBy(filter){
    return db("users")
    .where(filter)
    .first()
}

function getUsername(username) {
    return db("users")
    .where({username})
    .first()
}


// async function add(user) {
    //     const [userId] = await db('users').insert(user)
    //     return db('users as u')
    //     .where('id', userId)
    //     .select('u.username', 'u.id')
    // }
    
    // async function add(user) {
        //     const [newUserObject] = await db('users').insert(user, ['id', 'username', 'password'])
        //     return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
        // }
        


        // function findById(user_id){
        //     return db("users")
        //     .where({user_id})
        //     .first()
        // }

//  function findById(id) {
//     return db('users')
//     .where('user_id', id).first()
//     .select("users.username", "users.id")
//   }
        //   function findById(id) {
        //     return db("users")
        //     .select('user_id', "username")
        //     .where('user_id', id).first();
        //   }
        // function findById(id) {
        //     return db("items")
        //       .where({ id })
        //       .first();
        // }

        async function findById(user_id) {
            console.log("user_id", user_id)
            const user = await db("users")
              .where({ user_id })
              .first();
            console.log("user",user)
            return user
        }

        
 async function add(user) {
return db('users').insert(user, 'user_id').then(([user_id]) => {
    console.log(user_id, "user_id")
    return findById(user_id)

 })

}

        //  async function add(user) {
        //     const [id] = await db("users").insert(user);
        //     return findById(id);
        //   }

module.exports = {
    find,
    findBy,
    findById,
    add,
    getUsername
}