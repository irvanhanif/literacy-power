/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('review', (table) => {
    table.increments('id_review');
    table.text('note').notNullable();
    table.string('name', 100).notNullable();
    table.string('university', 255).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('review')
};
