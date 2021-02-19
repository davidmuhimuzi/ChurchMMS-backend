module.exports = app => {
    const Person = require("../controllers/person.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Person
    router.post("/", Person.create);
  
    // Retrieve all People
    router.get("/", Person.findAll);
  
    // Retrieve a single Person with id
    router.get("/:per_ID", Person.findOne);
  
    // Update a Person with id
    router.put("/:per_ID", Person.update);
  
    app.use('/api/person', router);
};