const db = require("../models");
const Event = db.events;

// Create and Save a new Event
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create an Event
    const event = {
        evt_ID: req.body.event_ID,
        event_name: req.body.event_name,
        event_date: req.body.event_date,
        event_start: req.body.event_start,
        event_end: req.body.event_end,
        event_desc: req.body.description,
        loc_ID: req.body.location,
    };

    // Save Event in the database  
    console.log(event);
    Event.create(event)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Event."
        });
    });
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {

    Event.findAll()
    
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Events."
        });
    });
    
};

// Find a single Event with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Event.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Event with id=" + id
        });
    });
};

// Update a Event by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Event.update(req.body, {
        where: {
            evt_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Event was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Event with id=" + id
        });
    });
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Event.destroy({
        where: {
            evt_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Event was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Event with id=${id}. Maybe Event was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Event with id=" + id
        });
    });
};
