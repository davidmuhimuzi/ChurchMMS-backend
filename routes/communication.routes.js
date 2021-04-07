module.exports = app => {
    const Communication = require("../controllers/communication.controller.js");
    
    var router = require("express").Router();

    router.post("/", Communication.create);
  
    router.get("/", Communication.findAll);
  
    router.get("/:id", Communication.findOne);
  
    router.put("/:id", Communication.update);

    router.delete("/:id", Communication.delete);
  
    app.use('/api/communications', router);
};