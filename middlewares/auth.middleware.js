var db = require('../db');

module.exports.requireAuth =  function  (req, res) {
	if(!req.cookies.userID){
		res.redirect('/auth/login');
		return;		
	}
	var user = db.get('users').find({user: req.cookies.userID}).value();

	if(user){
		res.redirect('/auth/login');
		return;	
	}
	next();
};