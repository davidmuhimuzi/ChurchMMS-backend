module.exports = app => {
    const Family = require("../controllers/family.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/", Family.create);
  
    // Retrieve all Majors
    router.get("/", Family.findAll);
  
    // Retrieve a single Course with id
    router.get("/:id", Family.findOne);
  
    // Update a Course with id
    router.put("/:id", Family.update);
  
    // Delete a Course with id
    router.delete("/:id", Family.delete);
  
    // Delete all Majors
    router.delete("/", Family.deleteAll);
  
    app.use('/api/families', router);
};