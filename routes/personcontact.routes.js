module.exports = app => {
    const Personcontact = require("../controllers/personcontact.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/", Personcontact.create);
  
    // Retrieve all Majors
    router.get("/", Personcontact.findAll);
  
    // Retrieve a single Course with id
    router.get("/:id", Personcontact.findOne);
  
    // Update a Course with id
    router.put("/:id", Personcontact.update);
  
    // Delete a Course with id
    router.delete("/:id", Personcontact.delete);
  
    // Delete all Majors
    router.delete("/", Personcontact.deleteAll);
  
    app.use('/api/personcontact', router);
};