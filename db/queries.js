const knex = require('./knex');

module.exports = {
  getAll: function(){
    return knex('todolist');
  },
  getOne: function(todo_id){
    return knex('todolist').where('id', todo_id).first();
  },
  create: function(todo){
    return knex('todolist').insert(todo);
  },
  update: function(id, todo){
    return knex('todolist').where('id', id).update(todo);
  },
  delete: function(id){
    return knex('todolist').where('id', id).del();
  }

};
