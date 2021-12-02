//Good?
const logger = require('../../config/logger');
const Mongoose = require('mongoose');
const Customers = Mongoose.model('Customers');

getCustomers = (req, res, next) => {
    logger.log('Getting all customers', 'info');
    const query = Customers.find({}, (error, customers) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(customers);
        }
    })
};

getCustomerByID = (req, res, next) => {
    logger.log('Getting customer ' + req.params.id, 'info');
    const query = Customers.findOne({ _id: req.params.id }, (error, customer) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(customer);
        }
    })
};

createCustomer = (req, res, next) => {
    logger.log('Create customer');
    let customer = new Customers(req.body);
    customer.save().then(result => {
        res.status(200).json(result);
    });
}

updateCustomer = (req, res, next) => {
    Customers.findOneAndUpdate({ _id: req.body._id }, req.body, {
        new: true, safe: true,
        multi: false
    }, (error, customer) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(customer);
        }
    })
}

deleteCustomer = (req, res, next) => {
    Customers.remove({ _id: req.params.id }, (error, customer) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(customer);
        }
    });
}

module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
}