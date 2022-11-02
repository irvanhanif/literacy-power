/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('buku', (table) => {
    table.increments('id_buku').primary();
    table.text('coverUrl');
    table.string('judul', 65).notNullable();
    table.string('penulis', 100).defaultTo('unknown');
    table.string('negara', 150).notNullable();
    table.string('bahasa', 45).notNullable();
    table.string('genre', 45);
    table.string('penerbit', 150);
    table.bigInteger('tahun');
    table.integer('halaman').notNullable();
    table.text('ringkasan');
    table.timestamp('createdAt').notNullable().defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('buku');
};
