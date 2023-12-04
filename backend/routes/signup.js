const router = require('express').Router();
let signup_data = require('../models/signup.model');

router.route('/get').get((req,res) => {
    signup_data.find()
    .then(signup => res.json(signup))
    .catch(err => res.status(400).json('Error: ' +err));
})

router.route('/post').post((req, res) => {
    const firstName = req.body.firstName;
    const userName = req.body.userName;
    const contact = req.body.contact;
    const lastName = req.body.lastName;
    const gender = req.body.gender;
    const password = req.body.password;

    const newsignup_data = new signup_data({ firstName, userName, contact, lastName, gender, password });
    newsignup_data.save()
    .then(() => res.json('Data added'))
    .catch(err => res.status(400).json('Error: '+ err));
})

module.exports = router;