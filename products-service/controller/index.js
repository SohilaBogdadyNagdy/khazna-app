const productsModel = require("../model/index");

exports.listProducts = async (req, res, next) => {
    try {
        const balance = req.user.balance;
        const data = await productsModel.findByUserBalance(balance);
        return res.status(200).json({data});
    } catch(exp) {
        return res.status(500).json({message: exp.message});
    }
};

exports.request = async (req, res, next) => {
    try {
        console.log('request product')
        const user = req.user;
        const { id } = req.params;
        product = await productsModel.findOne(id)
        if (!product) {
            return res.status(400).json({ message: 'Product not found.'}) 
        }
        productsModel.updateState(id, 'REQUESTED')
        // deductFromUserBalance(product.price)
        return res.status(200).json({message: 'Done Successfully'});
    } catch(exp) {
        return res.status(500).json({message: exp.message});
    }
};

exports.cancel = async (req, res, next) => {
    try {
        const user = req.user;
        const { id } = req.params;
        product = await productsModel.findOne(id);
        if (!product) {
            return res.status(400).json({ message: 'Product not found.'}) 
        }
        if (product.state == 'Delivered') {
            return res.status(400).json({ message: 'Not Allowd to cancel product in delivered state.'})
        }
        productsModel.updateState(id, 'AVAILABE')
        // addToUserBalance(product.price)
        return res.status(200).json({message: 'Done Successfully'});
    } catch(exp) {
        return res.status(500).json({message: exp.message});
    }
};

