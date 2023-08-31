export async function up(knex) {
  return knex.schema.createTable('zombies', (table) => {
    table.increments('id')
    table.string('name')
    table.string('species')
    table.integer('power')
    table.string('speed')
    table.string('location')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('zombie')
}
