
const userModel = require("../model/index");

exports.signup = (req, res, next) => {
    try {
        console.log('signup');
        bcrypt.hash(req.body.password, 10).then(
            (hash) => {
              const user = userModel.create(req.body.name, req.body.balance, has);
              res.status(200).json({message: "user created"});
            }
        );
        res.status(500).json({message: err.message});
    } catch(exp) {
        res.status(500).json({message: err.message});
    }
    
  };
exports.login = (req, res, next) => {

};