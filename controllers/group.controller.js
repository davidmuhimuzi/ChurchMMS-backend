const db = require("../models");
const Group = db.group;


// Create and Save a new Group
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a Group
    const group = {
        grp_ID: req.body.grp_ID,
        vvg_ID: req.body.vvg_ID,
        vve_ID: req.body.vve_ID,
        grp_name: req.body.grp_name,
        per_ID: req.body.per_ID

    };

    // Save Group in the database
    console.log(group);
    Group.create(group)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Group."
        });
    });
};

// Retrieve all groups from the database.
exports.findAll = (req, res) => {
    Group.findAll()

    .then(data => {

        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Person."
        });
    });
    
};

// Find a single Group with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Group.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Group with id=" + id
        });
    });
};

// Update a Group by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Group.update(req.body, {
        where: {
            grp_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Group was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Group with id=${id}. Maybe Group was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Group with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Group.destroy({
        where: {
            grp_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Group was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Group with id=${id}. Maybe Group was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Group with id=" + id
        });
    });
};