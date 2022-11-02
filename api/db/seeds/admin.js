/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('admin').del()
  await knex('admin').insert([
    {
      id_admin: 1, 
      firstName: 'Andi',
      lastName: 'Syahrul Irawan',
      password: '$2a$10$TfzIG9lKnPVQxt/1/8joueNSD9rIEwe0GIFbkoMtv6/gvzbXPl8ju'
    }
  ]);
};
