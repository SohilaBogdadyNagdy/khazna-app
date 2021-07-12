var _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var flatten = require('flat')
const SECRET = 'secret%&(!';

const userModel = require("../model/index");

function generateToken(user) {
    return jwt.sign({ data: user}, SECRET, { expiresIn: '24h'});
}
exports.signup = async (req, res, next) => {
    try {
        console.log('signup');
        hash = await bcrypt.hash(req.body.password, 10);
        const user = await userModel.create(req.body.name, req.body.balance, hash);
        return res.status(200).json({data: user });
    } catch(exp) {
        console.log(exp)
        return res.status(500).json({message: exp.message});
    }
    
  };
exports.login = async (req, res, next) => {
    try {
        console.log('login');
        const body = req.body;
        user = await userModel.findOneByName(body.name);
        if (!user){
            return res.status(401).json({message: 'Not Authorized'});
        }
        var userPass = flatten(user);
        userPass = _.get(userPass, 'password') || _.get(userPass, '0.password') 
        const valid = await bcrypt.compare(body.password, userPass);
        if (valid) { return res.status(200).json({token: generateToken(user)}) };
        return res.status(400).json({message: 'Password not correct'});
    } catch(exp) {
        console.log(exp);
        return res.status(500).json({message: exp.message});
    }
};