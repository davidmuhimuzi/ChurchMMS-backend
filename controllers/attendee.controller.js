const db = require("../models");
const Attendee = db.attendee;
const Op = db.Sequelize.Op;

// Create and Save a new Attendee
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    } 

    // Create an attendee
    const attendee = {
        atd_ID: req.body.atd_ID,
        evt_ID: req.body.evt_ID,
        per_ID: req.body.per_ID,
        username: req.body.username,
        contribution: req.body.contribution
    };

    // Save Attendee in the database
    Attendee.create(attendee)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Attendee."
        });
    });
};

// Retrieve all Attendees from the database.
exports.findAttendeeForEvent = (req, res) => {
    const evt_ID = req.query.events;  

    var condition = evt_ID ? {
        evt_ID: {
        [Op.like]: `%${evt_ID}%`
        }
    } : null;

    Attendee.findAll({include:["event"], where: condition }) 
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Attendees."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Attendee.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Attendee with id=" + id
        });
    });
};

// Update an Attendee by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Attendee.update(req.body, {
        where: {
            atd_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Attendee was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Attendee with id=${id}. Maybe Attendee was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Attendee with id=" + id
        });
    });
};

// Delete an Attendee with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Attendee.destroy({
        where: {
            atd_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Attendee was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Attendee with id=${id}. Maybe Attendee was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Attendee with id=" + id
        });
    });
};

