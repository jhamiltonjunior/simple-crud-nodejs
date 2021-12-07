exports.seed = (knex) => knex('posts').del()
  .then(() => knex('posts').insert([
    {
      title: 'Como Aprender a aprender',
      body: 'Aprendendo',
    },
    {
      title: 'Esse Título aqui não é um teste',
      body: 'Eu disse que não era um teste',
    },
    // { id: 3, colName: 'rowValue3' },
  ]));

// Deletes ALL existing entries
// Inserts seed entries
