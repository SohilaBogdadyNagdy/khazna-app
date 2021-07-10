
const userModel = require("../model/index");

exports.signup = (req, res, next) => {
    try {
        bcrypt.hash(req.body.password, 10).then(
            (hash) => {
              const user = userModel.create(req.body.name, req.body.balance, has);
              res.status(200).json({message: "user created"});
            }
        );
    } catch(exp) {}
    
  };
exports.login = (req, res, next) => {

};