
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todolist', function(table){
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description');
    table.boolean('completed').notNullable().defaultTo(false);
    table.integer('priority');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('todolist');
};
