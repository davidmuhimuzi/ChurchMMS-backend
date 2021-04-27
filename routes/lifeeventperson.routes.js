module.exports = app => {
    const lifeeventperson = require("../controllers/lifeventperson.controller.js");
    
    var router = require("express").Router();
  
    // Create a new life event person
    router.post("/", lifeeventperson.create);
  
    // Retrieve all life events
    router.get("/", lifeeventperson.findLifeEventForPerson);
  

    router.get("/:id", lifeeventperson.findOne);

    router.put("/:id", lifeeventperson.update);
  
    
    router.delete("/:id", lifeeventperson.delete);
    
    router.delete("/", lifeeventperson.deleteAll);
  
    app.use('/api/lifeventperson', router);
};