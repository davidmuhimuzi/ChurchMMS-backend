module.exports = app => {
    const Event = require("../controllers/event.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Event
    router.post("/", Event.create);
  
    // Retrieve all Events
    router.get("/", Event.findAll);
  
    // Retrieve a single Event with id
    router.get("/:id", Event.findOne);
  
    // Update a Event with id
    router.put("/:id", Event.update);
  
    // Delete a Event with id
    router.delete("/:id", Event.delete);
  
    app.use('/api/events', router);
};