module.exports = app => {
    const LifeEvent = require("../controllers/lifeevent.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Life Event
    router.post("/", LifeEvent.create);
  
    // Retrieve all Life Event
    router.get("/", LifeEvent.findAll);
  
    // Retrieve a single Life Event with id
    router.get("/:id", LifeEvent.findOne);
  
    // Update a Life Event with id
    router.put("/:id", LifeEvent.update);
  
    app.use('/api/lifeevent', router);
};