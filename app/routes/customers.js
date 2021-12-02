//good?
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customers');
const requireAuth = passport.authenticate('jwt', { session: false });

router.get('/customers', requireAuth,customerController.getCustomers);//needs event handlers

router.get('/customers/:id', requireAuth,customerController.getCustomerByID);

router.post('/customers', requireAuth,customerController.updateCustomer);

router.put('/', requireAuth,customerController.createCustomer);

router.delete('/customers/:id', requireAuth,customerController.deleteCustomer);

// router.patch('/', requireAuth,userController.updateCustomers);

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