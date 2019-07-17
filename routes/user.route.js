var express = require('express');
var router = express.Router();


var controller = require('../controller/user.controller');
var validate = require('../validate/users.validate');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.view);

router.post('/create', validate.postCreate, controller.postCreate);

router.post('/rm/:id', controller.removeDb);

module.exports = router;