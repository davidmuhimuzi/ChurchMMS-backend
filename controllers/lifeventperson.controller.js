const db = require("../models");
const lifeeventperson = db.lifeeventperson;
const Op = db.Sequelize.Op;

// Create and Save a life event person
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a life event person
    const groupmember = {
        lep_ID: req.body.lep_ID,
        event_ID: req.body.event_ID,
        per_ID: req.body.per_ID,
        vvg_ID: req.body.vvg_ID,
        vve_ID: req.body.vve_ID
    };

    // Save life event in the database
    lifeventperson.create(lifeventperson)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the life event person."
        });
    });
};

// Retrieve all groupmember from the database.
exports.findLifeEventForPerson = (req, res) => {
    const event_ID = req.query.group;
    
    var condition = event_ID ? {
        event_ID: {
        [Op.like]: `%${event_ID}%`
        }
    } : null;

    lifeeventperson.findAll({include:["lifevent", "person"], where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving person life events."
        });
    });
    
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    lifeeventperson.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving life event person with id=" + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    lifeeventperson.update(req.body, {
        where: {
            lep_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Life Event was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update life event  with id=${id}. Maybe life event was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating life event with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    lifeventperson.destroy({
        where: {
            lep_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Life event was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete life event with id=${id}. Maybe life event was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete life event with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    const id = req.query.id;
    lifeeventperson.destroy({
        where: {event_ID: id},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Life event were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all life event."
        });
    });
};