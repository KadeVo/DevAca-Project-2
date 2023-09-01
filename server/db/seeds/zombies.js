export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('zombies').del()

  // Inserts seed entries
  await knex('zombies').insert([
    {
      id: 1,
      name: 'Dormant DaviD',
      species: 'Infector',
      power: 11,
      speed: 'slow',
      location: 'Purgus',
    },
    {
      id: 2,
      name: 'Eerie Elise',
      species: 'Plagueclaw',
      power: 5,
      speed: 'fast',
      location: 'Loto',
    },
    {
      id: 3,
      name: 'Jellylimbed Jen',
      species: 'Plagueclaw',
      power: 8,
      speed: 'fast',
      location: 'Nabuaga',
    },
    {
      id: 4,
      name: 'Zombified Zack',
      species: 'Plagueclaw',
      power: 2,
      speed: 'medium',
      location: 'Nabuaga',
    },
    {
      id: 5,
      name: 'Undead Ulysses',
      species: 'Infector',
      power: 6,
      speed: 'fast',
      location: 'Market town',
    },
    {
      id: 6,
      name: 'Decay David',
      species: 'Infector',
      power: 9,
      speed: 'slow',
      location: 'Assassin Mountain',
    },
    {
      id: 7,
      name: 'Jittery Jatin',
      species: 'Corpsecharger',
      power: 10,
      speed: 'fast',
      location: 'Torn Spleen',
    },
    {
      id: 8,
      name: 'Gravewalker Gerard',
      species: 'Corpsecharger',
      power: 10,
      speed: 'slow',
      location: 'Boom Bay',
    },
  ])
}

//Location names: Slaafur, Purgus, NergalStan, loto, Nabuaga, Aukudo, SaintStand, Chair, Market town, Assassin Mountain, Torn Spleen, Old Town, Boom Bay, Field of Bones, Dire Gates, Bodypart swamp.
