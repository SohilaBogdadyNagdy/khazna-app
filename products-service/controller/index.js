const productsModel = require("../model/index");

exports.listProducts = (req, res, next) => {
    try {
        const balance = 0;
        const data = productsModel.findByUserBalance(balance);
        res.status(200).json({data});
    } catch(exp) {
        res.status(500).json({message: exp.message});
    }
  
};

exports.request = (req, res, next) => {
};

exports.cancel = (req, res, next) => {
};

