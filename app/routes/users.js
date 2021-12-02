//Good?
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/users', requireAuth,userController.getUsers);//needs event handlers

router.get('/users/:id', requireAuth,userController.getUsersByID);

router.post('/users', requireAuth,userController.updateUsers);

router.put('/', requireAuth,userController.createUsers);

router.delete('/users/:id', requireAuth,userController.deleteUsers);

// router.patch('/', requireAuth,userController.updateUsers);

// router.get('/', (req, res, next) =>{
//     res.status(200).json('Customers Retrieved');
// });

// router.get('//:id', (req, res, next) =>{
//     res.status(200).json('Customers' + req.params.id + 'Retrieved');
// });

// router.post('/', (req, res, next) =>{
//     res.status(201).json(req.body);
// });

// router.put('/customers', (req, res, next) =>{
//     logger.log('Getting all customers', 'info');
//     res.status(200).json('Customers' + req.body.name + 'updated');
// });

// router.delete('//:id', (req, res, next) =>{
//     res.status(204).json('Customers' + req.params.id + 'deleted');
// });

// router.get('/customers/:id', (req, res, next) => {
//     res.status(200).json({id: req.params.id});
// });
// module.exports = router;