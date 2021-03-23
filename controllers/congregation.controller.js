const db = require("../models");
const Congregation = db.congregation;
//const Op = db.Sequelize.Op;

// Create and Save a new Congregation
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a Congregation
    const congregation = {
        con_ID: req.body.con_ID,
        con_name: req.body.con_name,
        con_addrs: req.body.con_addrs,
     
    };

    // Save Person in the database
    Congregation.create(congregation)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Congregation."
        });
    });
};

// Retrieve all Persons from the database.
exports.findAll = (req, res) => {
    Congregation.findAll()

    .then(data => {

        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Congregation."
        });
    });
    
};

// Find a single Congregation with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Congregation.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Congregation with id=" + id
        });
    });
};

// Update a Person by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Congregation.update(req.body, {
        where: {
            con_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Congregation was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Congregation with id=${id}. Maybe Congregation was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Congregation with id=" + id
        });
    });
};
