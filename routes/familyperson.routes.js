module.exports = app => {
    const Familyperson = require("../controllers/familyperson.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Course
    router.post("/", Familyperson.create);
  
    // Retrieve all Majors
    router.get("/", Familyperson.findPeopleForFamily);
  
    // Retrieve a single Course with id
    router.get("/:id", Familyperson.findOne);
  
    // Update a Course with id
    router.put("/:id", Familyperson.update);
  
    // Delete a Course with id
    router.delete("/:id", Familyperson.delete);
  
    // Delete all Majors
    router.delete("/", Familyperson.deleteAll);
  
    app.use('/api/familyperson', router);
};