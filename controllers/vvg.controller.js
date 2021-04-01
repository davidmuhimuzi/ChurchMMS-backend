const db = require("../models");
const Vvg = db.validvaluegroup; // was Family = db.family


// Create and Save a new VVG
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a VVG
    const vvg = {
        vvg_ID: req.body.vvg_ID,
        vvg_name: req.body.vvg_name,
        vvg_code: req.body.vvg_code,
    };

    // Save Valid Value Group in the database
    console.log(vvg);
    Vvg.create(vvg)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Valid Value Group."
        });
    });
};

// Retrieve all Valid Value Groups from the database.
exports.findAll = (req, res) => {

    Vvg.findAll()
    
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Valid Value Groups."
        });
    });
    
};

// Find a single Valid Value Group with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Vvg.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Valid Value Group with id=" + id
        });
    });
};

// Update a Valid Value Group by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Vvg.update(req.body, {
        where: {
            vvg_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Valid Value Group was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Valid Value Group with id=${id}. Maybe Valid Value Group was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Valid Value Group with id=" + id
        });
    });
};

// Delete a Valid Value Group with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Vvg.destroy({
        where: {
            vvg_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Valid Value Group was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Valid Value Group with id=${id}. Maybe Valid Value Group was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Valid Value Group with id=" + id
        });
    });
};

// Delete all Valid Value Groups from the database.
exports.deleteAll = (req, res) => {
    Vvg.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Valid Value Groups were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Valid Value Groups."
        });
    });
};