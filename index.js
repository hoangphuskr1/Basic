var express = require('express');
var bodyParser = require('body-parser')
var userRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');
var app = express();

var port = 3000;


app.get('/', function  (req, res) {
	res.render('index');
});

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing routerlication/json
app.use(express.urlencoded({ extended: true })) // for parsing routerlication/x-www-form-urlencoded

app.use(express.static('public'));
app.use('/users',userRouter);
app.use('/users/rm',userRouter);
app.use('/auth', authRouter);

app.listen(port, function  () {
	
	console.log('Hi Phu Do Dai ' + 'at port' +  port);
});
