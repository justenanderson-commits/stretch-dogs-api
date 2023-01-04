exports.up = knex =>
  knex.schema.createTable("dogs", tbl => {
    tbl.increments();
    tbl.text("breed", 128).notNullable();
    tbl.text("size", 128).notNullable();
    tbl.integer("family-rating", 128).notNullable();
    tbl.integer("trainability", 128).notNullable();
    tbl.integer("grooming-needs", 128).notNullable();
    tbl.integer("energy-level", 128).notNullable();
    tbl.text("img", 256).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists("dogs"); 