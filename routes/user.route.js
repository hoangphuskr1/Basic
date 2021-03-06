var express = require('express');
var router = express.Router();
var controller = require('../controller/user.controller');
var validate = require('../validate/users.validate');
var requireMiddleware = require('../middlewares/auth.middleware')

router.get('/', requireMiddleware.requireAuth, controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.view);

router.post('/create', validate.postCreate, controller.postCreate);

router.get('/rm/:id', controller.removeDb);

module.exports = router;
