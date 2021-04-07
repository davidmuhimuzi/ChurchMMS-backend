const db = require("../models");
const Personcontact = db.personcontact;
const Op = db.Sequelize.Op;

// Create and Save a new Personcontact
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a Personcontact
    const personcontact = {
        cpc_ID: req.body.cpc_ID,
        com_ID: req.body.com_ID,
        per_ID: req.body.per_ID,
    };

    // Save Personcontact in the database
    Personcontact.create(personcontact)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Personcontact."
        });
    });
};

// Retrieve all Personcontacts from the database.
exports.findAll = (req, res) => {
    const per_ID = req.query.person;

    var condition = per_ID ? {
        per_ID: {
        [Op.like]: `%${per_ID}%`
        }
    } : null;

    Personcontact.findAll({include:["person", "communication"], where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Personcontacts."
        });
    });
    
};

// Find a single Personcontact with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Personcontact.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Personcontact with id=" + id
        });
    });
};

// Update a Personcontact by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Personcontact.update(req.body, {
        where: {
            fp_ID: id
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
            message: "Error updating Personcontact with id=" + id
        });
    });
};

// Delete a Personcontact with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Personcontact.destroy({
        where: {
            cpc_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Personcontact was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Personcontact with id=${id}. Maybe Personcontact was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Personcontact with id=" + id
        });
    });
};

// Delete all Personcontacts from the database.
exports.deleteAll = (req, res) => {
    const id = req.query.id;

    Personcontact.destroy({
        where: {per_ID: id},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Families were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Personcontacts."
        });
    });
};