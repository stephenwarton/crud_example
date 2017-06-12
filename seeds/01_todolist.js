
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  //return knex.raw('TRUNCATE todolist RESTART IDENTITY CASCADE;')
  return knex.raw('TRUNCATE todolist; ALTER SEQUENCE todolist_id_seq restart with 11;')
    .then(function () {
      // Inserts seed entries
      return knex('todolist').insert([
        {
          id: 1,
          title: 'wash car',
          description: '',
          completed: false,
          priority: 2
        },
        {
          id: 2,
          title: 'walk the dog',
          description: '',
          completed: true,
          priority: 8
        },
        {
          id: 3,
          title: 'clean bathroom',
          description: 'toilet, sink, bathtub',
          completed: false,
          priority: 4
        },
        {
          id: 4,
          title: 'do laundry',
          description: 'towels, darks',
          completed: false,
          priority: 7
        },
        {
          id: 5,
          title: 'grocery store',
          description: 'eggs, bananas, bread',
          completed: false,
          priority: 8
        },
        {
          id: 6,
          title: 'go to post office',
          description: 'buy stamps, send package',
          completed: true,
          priority: 3
        },
        {
          id: 7,
          title: 'pay rent',
          description: '',
          completed: false,
          priority: 9
        },
        {
          id: 8,
          title: 'call parents',
          description: '',
          completed: true,
          priority: 3
        },
        {
          id: 9,
          title: 'finish assignment',
          description: 'exercise3 part1',
          completed: false,
          priority: 8
        },
        {
          id: 10,
          title: 'go to library',
          description: 'drop off books',
          completed: false,
          priority: 6
        }
      ]);
    });
};
