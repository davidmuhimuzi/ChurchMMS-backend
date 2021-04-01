module.exports = app => {
    const Vve = require("../controllers/vve.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Valid Value Entry
    router.post("/", Vve.create);
  
    // Retrieve all Valid Value Entries
    router.get("/", Vve.findAll);
  
    // Retrieve a single Valid Value Entry with id
    router.get("/:id", Vve.findOne);
  
    // Update a Valid Value Entry with id
    router.put("/:id", Vve.update);
  
    // Delete a Valid Value Entry with id
    router.delete("/:id", Vve.delete);
  
    // Delete all Valid Value Entries
    router.delete("/", Vve.deleteAll);
  
    app.use('/api/vve', router);
};