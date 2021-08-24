exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable().unique()
      users.string('password', 200).notNullable()
    })
    .createTable('items', items => {
      items.increments()
      items.text("name")
      items.text("description")
      items.string("price")
      items.text("location")
      items.text("category")
      items.string("URL")
      items
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
}

exports.down =  (knex, Promise) => {
  return knex.schema
  .dropTableIfExists("items")
  .dropTableIfExists("users")
}
