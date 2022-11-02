/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('galery', (table) => {
      table.increments('id_galery');
      table.string('nama', 150).notNullable();
      table.string('public_id', 65);
      table.text('link');
      table.boolean('show_on_home').notNullable().defaultTo(false);
      table.timestamp('time_upload').defaultTo(knex.fn.now());
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('galery')  
  };
  