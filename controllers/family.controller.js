const db = require("../models");
const Family = db.family;

// Create and Save a new Major
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a Major
    const family = {
        fam_ID: req.body.fam_ID,
        fam_name: req.body.fam_name,
        per_ID: req.body.per_ID,
    };

    // Save Major in the database
    console.log(family);
    Family.create(family)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Major."
        });
    });
};

// Retrieve all Majors from the database.
exports.findAll = (req, res) => {

    Family.findAll()
    
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Majors."
        });
    });
    
};

// Find a single Major with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Family.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Major with id=" + id
        });
    });
};

// Update a Major by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Family.update(req.body, {
        where: {
            fam_ID: id
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
            message: "Error updating Major with id=" + id
        });
    });
};

// Delete a Major with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Family.destroy({
        where: {
            fam_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Major was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Major with id=${id}. Maybe Major was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Major with id=" + id
        });
    });
};

// Delete all Majors from the database.
exports.deleteAll = (req, res) => {
    Family.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Families were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Majors."
        });
    });
};