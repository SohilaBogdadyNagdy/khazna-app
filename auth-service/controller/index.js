const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'secret%&(!';

const userModel = require("../model/index");

function generateToken(user) {
    return jwt.sign({ data: user}, secret, { expireIn: '24h'});
}
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
    console.log('login')
    user = userModel.findOneByName(req.body.name);
    if (!user){
        res.status(401).json({message: 'Not Authorized'});
    }
    bcrypt.compare(req.body.password, user.password, (error, match) => {
        if (error) { res.status(400).json({message: 'Password not correct'});}
        res.status(200).json({token: generateToken(user)});

    });
    res.status(401).json({message: 'Not Authorized'});
};