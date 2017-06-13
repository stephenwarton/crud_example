var express = require("express");
var router = express.Router();
var queries = require("../db/queries");

function isValidId(req, res, next){
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validTodo(todo){
  const hasTitle = typeof todo.title == 'string' && todo.title.trim() != '';
  return hasTitle;
}

router.get('/todo', function(req, res, next){
  queries.getAll()
  .then(function(todolist){
    res.json(todolist);
  });
});

router.get('/todo/:id', isValidId, function(req, res, next){
  queries.getOne(req.params.id)
  .then(function(todolist){
    if(todolist){
      res.json(todolist);
    } else{
      next();
    }
  });
});

router.post('/todo', function(req, res, next){
  if(validTodo(req.body)){
    queries.create({
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed,
      priority: req.body.priority
    }).then(function(result){
      res.json(result);
    });
  } else {
    next(new Error('Invalid todo'));
  }
});

router.put('/todo/:id', isValidId, function(req, res, next){
  queries.update(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
    priority: req.body.priority
  }).then(function(todolist){
    if(todolist){
      res.json(todolist);
    } else{
      next();
    }
  });
});

router.delete('/todo/:id', isValidId, function(req, res, next){
  queries.delete(req.params.id).then(function(todolist){
    if(todolist){
      res.json(todolist);
    } else{
      next();
    }
  });
});

module.exports = router;
