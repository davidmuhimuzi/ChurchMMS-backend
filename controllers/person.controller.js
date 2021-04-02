const db = require("../models");
const Person = db.person;
//const Op = db.Sequelize.Op;

// Create and Save a new Person
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a Person
    const person = {
        per_ID: req.body.per_ID,
        fam_ID: req.body.fam_ID,
        frst_name: req.body.frst_name,
        midl_name: req.body.midl_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        role_value: req.body.role_value,
        password: req.body.password,
        bday: req.body.bday,
        baptised: req.body.baptised,
        bapt_date: req.body.bapt_date,
        employer: req.body.employer,
        pub_permission: req.body.pub_permission,
        church_pos: req.body.church_pos,
        fam_pos: req.body.fam_pos,
        notes: req.body.notes,
    };

    // Save Person in the database
    Person.create(person)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Person."
        });
    });
};

// Retrieve all Persons from the database.
exports.findAll = (req, res) => {
    Person.findAll()

    .then(data => {

        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Person."
        });
    });
    
};

// Find a single Person with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Person.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Person with id=" + id
        });
    });
};

// Update a Person by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Person.update(req.body, {
        where: {
            per_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Person was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Person with id=${id}. Maybe Person was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Person with id=" + id
        });
    });
};
