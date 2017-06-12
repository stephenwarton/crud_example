var express = require("express");
var router = express.Router();
var queries = require("../db/queries");

router.get("/", function(request, response, next){
  queries.getAll()
  .then(function(todolist){
    response.json(todolist);
  });
});

router.get("/:id", function(request, response, next){
  queries.getOne(request.params.id)
  .then(function(todolist){
    response.json(todolist);
  });
});

router.post('/', function(req, res){
  queries.create({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
    priority: req.body.priority
  }).then(function(result){
    res.json(result);
  });
});

router.put('/:id', function(req, res){
  queries.update(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed,
    priority: req.body.priority
  }).then(function(result){
    res.json(result);
  });
});

router.delete('/:id', function(req, res){
  queries.delete(req.params.id).then(function(result){
    res.json(result);
  });
});

module.exports = router;
