const db = require("../models");
const Communication = db.communication;
//const Op = db.Sequelize.Op;

// Create and Save a new Communication
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a Communication
    const communication = {
        com_ID: req.body.com_ID,
        vvg_ID: req.body.vvg_ID,
        vve_ID: req.body.vve_ID,
        address: req.body.address,
        number: req.body.number
    };

    // Save Communication in the database
    Communication.create(communication)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Communication."
        });
    });
};

// Retrieve all Communications from the database.
exports.findAll = (req, res) => {
    
    Communication.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Communications."
        });
    });
    
};

// Find a single Communication with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Communication.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Communication with id=" + id
        });
    });
};

// Update a Communication by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Communication.update(req.body, {
        where: {
            com_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Family was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Family with id=${id}. Maybe Family was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Communication with id=" + id
        });
    });
};

// Delete a Communication with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Communication.destroy({
        where: {
            com_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Communication was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Communication with id=${id}. Maybe Communication was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Communication with id=" + id
        });
    });
};

// Delete all Communications from the database.
exports.deleteAll = (req, res) => {
    const id = req.query.id;

    Communication.destroy({
        where: {com_ID: id},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Families were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Communications."
        });
    });
};