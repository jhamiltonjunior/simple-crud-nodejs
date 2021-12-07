export const up = (knex) => knex.schema.createTable(
  'posts',
  (table) => {
    table.increments('id');
    table.text('title').notNullable();
    table.text('body').notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  },
);

//

export const down = (knex) => knex.schema.dropTable('posts');
