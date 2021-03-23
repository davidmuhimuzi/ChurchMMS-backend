const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.options("*", cors);

const db = require("./models");
const Role = db.role;


db.sequelize.sync();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}


//require("./routes/family.routes")(app);
require("./routes/person.routes")(app);
require("./routes/family.routes")(app);
require("./routes/familyperson.routes")(app);
require("./routes/event.routes")(app);
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
