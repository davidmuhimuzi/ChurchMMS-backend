const db = require("../models");
const Groupmember = db.groupmember;
const Op = db.Sequelize.Op;

// Create and Save a new Groupmember
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can NOT be empty!"
        });
        return;
    }

    // Create a group member
    const groupmember = {
        gm_ID: req.body.gm_ID,
        grp_ID: req.body.grp_ID,
        per_ID: req.body.per_ID,
        vvg_ID: req.body.vvg_ID,
        vve_ID: req.body.vve_ID,
        grp_role: req.body.grp_role
    };

    // Save group mem in the database
    Groupmember.create(groupmember)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the groupmember."
        });
    });
};

// Retrieve all groupmember from the database.
exports.findMemberForGroup = (req, res) => {
    const grp_ID = req.query.group;
    
    var condition = grp_ID ? {
        grp_ID: {
        [Op.like]: `%${grp_ID}%`
        }
    } : null;

    Groupmember.findAll({include:["person", "group"], where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Familypersons."
        });
    });
    
};

// Find a single groupmember with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Groupmember.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving Groupmember with id=" + id
        });
    });
};

// Update a Groupmember by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Groupmember.update(req.body, {
        where: {
            gm_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Group member was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Group member with id=${id}. Maybe Groupmember was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Group member with id=" + id
        });
    });
};

// Delete a Group Member with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Groupmember.destroy({
        where: {
            gm_ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Group member was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Group member with id=${id}. Maybe Group member was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Group member with id=" + id
        });
    });
};

// Delete all Group member from the database.
exports.deleteAll = (req, res) => {
    const id = req.query.id;
    Groupmember.destroy({
        where: {grp_ID: id},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Group member were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while removing all Group member."
        });
    });
};