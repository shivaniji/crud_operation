var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'shivani123',
      database: 'shiva'
    },
   
  })


knex.schema.hasTable('users').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users', function(table) {
         table.increments("id");
        table.string("first_name").notNullable();
        table.string("last_name").notNullable();
        table.string("email").unique().notNullable();
        table.string("password").notNullable();
      });
    }
    console.log("tables create")
  });

module.exports=knex