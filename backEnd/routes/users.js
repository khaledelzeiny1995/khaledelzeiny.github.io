const router = require('express').Router();
let User = require('../models/user.model');

//get user
router.route('/').get((req , res) => {

    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req ,res) => {

    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const newUser = new User(
        {
            name,
            email,
            message
        }
    )
    newUser.save()
          .then(() => res.json('User added'))
          .catch(err => res.status(400).json('Erro: ' + err));

});


// get request
router.route('/:id').get((req , res) => {

    User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// delete request
router.route('/:id').delete((req , res) => {

    User.findByIdAndDelete(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(newusers => {
            newusers.name = req.body.name;
            newusers.email = req.body.email;
            newusers.message = req.body.message;

            newusers.save()
                .then(() => res.json('User added to the database!'))
                .catch(err => res.status(400).json('Erro: ' + err));
        })

        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;