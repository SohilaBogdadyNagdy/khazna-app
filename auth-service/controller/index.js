const bcrypt = require('bcrypt');

const userModel = require("../model/index");

exports.signup = (req, res, next) => {
    try {
        console.log('signup');
        hash = bcrypt.hash(req.body.password, 10);
        const user = userModel.create(req.body.name, req.body.balance, hash);
        res.status(200).json({message: "user created"});
    } catch(exp) {
        res.status(500).json({message: exp.message});
    }
    
  };
exports.login = (req, res, next) => {

};