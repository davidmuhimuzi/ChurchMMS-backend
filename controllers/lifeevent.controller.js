const db = require("../models");
const LifeEvent = db.lifeevent;
//const Op = db.Sequelize.Op;

// Create and Save a new LifeEvent
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a LifeEvent
    const lifeevent = {
        event_ID: req.body.event_ID,
        event_date: req.body.event_date,
        event_note: req.body.event_note,
     
    };

    // Save Life Event in the database
    LifeEvent.create(lifeevent)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the LifeEvent."
        });
    });
};

// Retrieve all Life Events from the database.

exports.findAll = (req, res) => {
    LifeEvent.findAll()

    .then(data => {

        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Life Events."
        });
    });
    
};

// Find a single Life Event with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    LifeEvent.findByPk(id)
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

    LifeEvent.update(req.body, {
        where: {
            event_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Life Event was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Life Event with id=${id}. Maybe Life Event was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Life Event with id=" + id
        });
    });
};