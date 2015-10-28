var express = require('express');
var router = express.Router();
var models = require('../models/index');

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// get all dogs
router.get('/dogs', function (req, res, next) {
  models.Dog.findAll({})
    .then(function(dogs) {
      res.json(dogs);
    });
});

router.post('/dogs', function (req, res, next) {
  models.Dog.create ({
    name: req.body.name,
    breed: req.body.breed,
    age: req.body.age,
    crazy: req.body.crazy
  })
  .then(function(dog) {
    models.Dog.findAll({})
      .then(function(dogs) {
        res.json(dogs);
      });
  });
});

router.get('/dog/:id', function (req, res, next) {
  models.Dog.find({
    where: {id: req.params.id}
  })
    .then(function(dog) {
      res.json(dog);
    });
});

router.put('/dog/:id', function (req, res, next) {
  models.Dog.find({
    where: {id: req.params.id}
  })
  .then(function (dog) {
    if(dog) {
      dog.updateAttributes({
        name: req.body.name,
        breed: req.body.breed,
        age: req.body.age,
        crazy: req.body.crazy
      })
      .then(function(dog) {
        res.send(dog);
      });
    }
  });
});

router.delete('/dog/:id', function (req, res, next) {
  models.Dog.destroy({
    where: {id: req.params.id}
  })
  .then(function() {
    models.Dog.findAll({})
      .then(function(dogs) {
      res.json(dogs);
      });
    });
});

module.exports = router;
