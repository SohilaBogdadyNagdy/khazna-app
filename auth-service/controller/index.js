const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = 'secret%&(!';

const userModel = require("../model/index");

function generateToken(user) {
    return jwt.sign({ data: user}, secret, { expiresIn: '24h'});
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
        console.log('login')
        user = await userModel.findOneByName(req.body.name);
        console.log(user)
        if (!user){
            return res.status(401).json({message: 'Not Authorized'});
        }
        bcrypt.compare(req.body.password, user.password, (error, match) => {
            if (error) { return res.status(400).json({message: 'Password not correct'});}
            return res.status(200).json({token: generateToken(user)});
        });
    } catch(exp) {
        console.log(exp);
        return res.status(500).json({message: exp.message});
    }
};