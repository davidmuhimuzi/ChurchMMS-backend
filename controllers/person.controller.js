const db = require("../models");
const Person = db.person;

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};

const getPagingData = (data, page, limit) => {
    const { count: totalItems, rows: person } = data;
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, person, totalPages, currentPage };
  };


// Create and Save a new Person
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a Person
    const person = {
        per_ID: req.body.per_ID,
        fam_ID: req.body.fam_ID,
        frst_name: req.body.frst_name,
        midl_name: req.body.midl_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        role_value: req.body.role_value,
        password: req.body.password,
        bday: req.body.bday,
        baptised: req.body.baptised,
        bapt_date: req.body.bapt_date,
        employer: req.body.employer,
        pub_permission: req.body.pub_permission,
        church_pos: req.body.church_pos,
        fam_pos: req.body.fam_pos,
    };

    // Save Student in the database
    Person.create(student)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Person."
        });
    });
};

// Retrieve all Persons from the database.
exports.findAll = (req, res) => {
    const { page, size } = req.query;

    const {limit, offset } = getPagination(page, size);

    Person.findAndCountAll({ limit:limit, offset:offset })

    
    .then(data => {

        const response = getPagingData(data, page, limit);
        res.send(response);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Person."
        });
    });
    
};

// Find a single Person with an id
exports.findOne = (req, res) => {
    const per_ID = req.params.per_ID;

    Person.findByPk(per_ID)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Student with id=" + per_ID
        });
    });
};

// Update a Person by the id in the request
exports.update = (req, res) => {
    const per_ID = req.params.per_ID;

    Person.update(req.body, {
        where: {
            per_ID: per_ID
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Person was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Person with id=${per_ID}. Maybe Person was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Person with id=" + per_ID
        });
    });
};

// Delete a Person with the specified id in the request
exports.delete = (req, res) => {
    const per_ID = req.params.per_ID;

    Person.destroy({
        where: {
            per_ID: per_ID
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Person was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Person with id=${per_ID}. Maybe Person was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Person with id=" + per_ID
        });
    });
};

// Delete all Person from the database.
exports.deleteAll = (req, res) => {
    Person.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Person was deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Person."
        });
    });
};
