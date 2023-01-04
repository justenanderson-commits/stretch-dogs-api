exports.up = knex =>
  knex.schema.createTable("dogs", tbl => {
    tbl.increments();
    tbl.text("task", 128).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("dogs"); 