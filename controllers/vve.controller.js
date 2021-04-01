const db = require("../models");
const Vve = db.validvalueentry;


// Create and Save a new Valid Value Entry
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a Valid Value Entry
    const vve = {
        vve_ID: req.body.vve_ID,
        vve_name: req.body.vve_name,
        vvg_ID: req.body.vvg_ID,
    };

    // Save Valid Value Entry in the database
    console.log(vve);
    Vve.create(vve)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Valid Value Entry."
        });
    });
};

// Retrieve all Valid Value Entries from the database.
exports.findAll = (req, res) => {

    Vve.findAll()
    
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Valid Value Entries."
        });
    });
    
};

// Find a single Valid Value Entry with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vve.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Valid Value Entry with id=" + id
        });
    });
};

// Update a Valid Value Entry by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Vve.update(req.body, {
        where: {
            vve_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Valid Value Entry was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Valid Value Entry with id=${id}. Maybe Valid Value Entry was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Valid Value Entry with id=" + id
        });
    });
};

// Delete a Valid Value Entry with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Vve.destroy({
        where: {
            vve_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Valid Value Entry was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Valid Value Entry with id=${id}. Maybe Valid Value Entry was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Valid Value Entry with id=" + id
        });
    });
};

// Delete all Valid Value Entries from the database.
exports.deleteAll = (req, res) => {
    Vve.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Valid Value Entries were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Valid Value Entries."
        });
    });
};