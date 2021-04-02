module.exports = app => {
    const Group = require("../controllers/group.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/", Group.create);
  
    // Retrieve all Majors
    router.get("/", Group.findAll);
  
    // Retrieve a single Course with id
    router.get("/:id", Group.findOne);
  
    // Update a Course with id
    router.put("/:id", Group.update);
    
    // Delete a Course with id
    router.delete("/:id", Group.delete);
  

  
    app.use('/api/group', router);
};