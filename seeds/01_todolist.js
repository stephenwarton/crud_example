
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE todolist RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('todolist').insert([
        {
          title: 'wash car',
          description: '',
          completed: false,
          priority: 2
        },
        {
          title: 'walk the dog',
          description: '',
          completed: true,
          priority: 8
        },
        {
          title: 'clean bathroom',
          description: 'toilet, sink, bathtub',
          completed: false,
          priority: 4
        },
        {
          title: 'do laundry',
          description: 'towels, darks',
          completed: false,
          priority: 7
        },
        {
          title: 'grocery store',
          description: 'eggs, bananas, bread',
          completed: false,
          priority: 8
        },
        {
          title: 'go to post office',
          description: 'buy stamps, send package',
          completed: true,
          priority: 3
        },
        {
          title: 'pay rent',
          description: '',
          completed: false,
          priority: 9
        },
        {
          title: 'call parents',
          description: '',
          completed: true,
          priority: 3
        },
        {
          title: 'finish assignments',
          description: 'exercise3 part1',
          completed: false,
          priority: 8
        },
        {
          title: 'go to library',
          description: 'drop off books',
          completed: false,
          priority: 6
        }
      ]);
    });
};

// {
//   title: 'wash car',
//   description: '',
//   completed: false,
//   priority: 2
// },
// {
//   title: 'walk the dog',
//   description: '',
//   completed: true,
//   priority: 8
// },
// {
//   title: 'clean bathroom',
//   description: 'toilet, sink, bathtub',
//   completed: false,
//   priority: 4
// },
// {
//   title: 'do laundry',
//   description: 'towels, darks',
//   completed: false,
//   priority: 7
// },
// {
//   title: 'grocery store',
//   description: 'eggs, bananas, bread',
//   completed: false,
//   priority: 8
// },
// {
//   title: 'go to post office',
//   description: 'buy stamps, send package',
//   completed: true,
//   priority: 3
// },
// {
//   title: 'pay rent',
//   description: '',
//   completed: false,
//   priority: 9
// },
// {
//   title: 'call parents',
//   description: '',
//   completed: true,
//   priority: 3
// },
// {
//   title: 'finish assignments',
//   description: 'exercise3 part1',
//   completed: false,
//   priority: 8
// },
// {
//   title: 'go to library',
//   description: 'drop off books',
//   completed: false,
//   priority: 6
// }
