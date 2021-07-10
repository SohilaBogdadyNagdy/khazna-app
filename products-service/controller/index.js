const productsModel = require("../model/index");

exports.listProducts = (req, res, next) => {
    try {
        const balance = req.user.balance;
        const data = productsModel.findByUserBalance(balance);
        res.status(200).json({data});
    } catch(exp) {
        res.status(500).json({message: exp.message});
    }
};

exports.request = (req, res, next) => {
    try {
        console.log('request product')
        const user = req.user;
        const { id } = req.params;
        product = productsModel.findOne(id)
        productsModel.updateState(id, 'REQUESTED')
        // deductFromUserBalance(product.price)
        res.status(200).json({message: 'Done Successfully'});
    } catch(exp) {
        res.status(500).json({message: exp.message});
    }
};

exports.cancel = (req, res, next) => {
    try {
        const user = req.user;
        const { id } = req.params;
        product = productsModel.findOne(id)
        if (product.state == 'Delivered') {
            res.state(400).json({ message: 'Not Allowd to cancel product in delivered state.'})
        }
        productsModel.updateState(id, 'AVAILABE')
        // addToUserBalance(product.price)
        res.status(200).json({message: 'Done Successfully'});
    } catch(exp) {
        res.status(500).json({message: exp.message});
    }
};

