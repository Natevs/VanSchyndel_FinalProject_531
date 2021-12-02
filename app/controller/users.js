//Good?
const logger = require('../../config/logger');
const Mongoose = require('mongoose');
const Users = Mongoose.model('Users');

getUsers = (req, res, next) => {
    logger.log('Getting all Users', 'info');
    const query = Users.find({}, (error, users) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(users);
        }
    })
};

getUsersByID = (req, res, next) => {
    logger.log('Getting users ' + req.params.id, 'info');
    const query = Users.findOne({ _id: req.params.id }, (error, users) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(users);
        }
    })
};

createUsers = (req, res, next) => {
    logger.log('Create user');
    let users = new Customers(req.body);
    users.save().then(result => {
        res.status(200).json(result);
    });
}

updateUsers = (req, res, next) => {
    Users.findOneAndUpdate({ _id: req.body._id }, req.body, {
        new: true, safe: true,
        multi: false
    }, (error, users) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(users);
        }
    })
}

deleteUsers = (req, res, next) => {
    Users.remove({ _id: req.params.id }, (error, users) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json(users);
        }
    });
}

module.exports = {
    getUsers,
    getUsers,
    createUsers,
    updateUsers,
    deleteUsers
}