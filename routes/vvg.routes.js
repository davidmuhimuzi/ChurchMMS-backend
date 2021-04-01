module.exports = app => {
    const Vvg = require("../controllers/vvg.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Valid Value Group
    router.post("/", Vvg.create);
  
    // Retrieve all Valid Value Groups
    router.get("/", Vvg.findAll);
  
    // Retrieve a single Valid Value Group with id
    router.get("/:id", Vvg.findOne);
  
    // Update a Valid Value Group with id
    router.put("/:id", Vvg.update);
  
    // Delete a Valid Value Group with id
    router.delete("/:id", Vvg.delete);
  
    // Delete all Valid Value Groups
    router.delete("/", Vvg.deleteAll);
  
    app.use('/api/vvg', router);
};