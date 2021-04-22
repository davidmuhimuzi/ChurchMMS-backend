module.exports = app => {
    const Attendee = require("../controllers/attendee.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Attendee
    router.post("/", Attendee.create);
  
    // Retrieve all Attendees
    router.get("/", Attendee.findAttendeeForEvent);
  
    // Retrieve a single Attendee with id
    router.get("/:id", Attendee.findOne);
  
    // Update a Attendee with id
    router.put("/:id", Attendee.update);
  
    // Delete a Attendee with id
    router.delete("/:id", Attendee.delete);
  
  
    app.use('/api/attendee', router);
};