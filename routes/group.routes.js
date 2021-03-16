module.exports = app => {
    const group = require("../controllers/group.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/", group.create);
  
    // Retrieve all Majors
    router.get("/", group.findPeopleForFamily);
  
    // Retrieve a single Course with id
    router.get("/:id", group.findOne);
  
    // Update a Course with id
    router.put("/:id", group.update);
  
    // Delete a Course with id
    router.delete("/:id", group.delete);
  
    // Delete all Majors
    router.delete("/", group.deleteAll);
  
    app.use('/api/group', router);
};