import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamps', image: 'lamps.svg' },
    { title: 'Batteries', image: 'batteries.svg' },
    { title: 'Paper and Cardboard', image: 'paper-cardboard.svg' },
    { title: 'Electronic Waste', image: 'eletronics.svg' },
    { title: 'Organic Waste', image: 'organics.svg' },
    { title: 'Kitchen Oil', image: 'oil.svg' },
  ]);
}