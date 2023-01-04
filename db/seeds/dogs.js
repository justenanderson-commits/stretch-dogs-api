/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('dogs').del()
  await knex('dogs').insert([
    {
      breed: 'Golden Retriever',
      size: 'large',
      family_rating: 5,
      trainability: 5,
      grooming_needed: 4,
      energy_level: 3,
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Golden_Retriever_2019.jpg/800px-Golden_Retriever_2019.jpg?20210119120616',
    },
  ])
}
