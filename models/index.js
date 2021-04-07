const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  },
  define: {
    timestamps: false
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.family = require("./family.model.js")(sequelize, Sequelize);
db.familyperson = require("./familyperson.model.js")(sequelize, Sequelize);
db.person = require("./person.model.js")(sequelize, Sequelize);
db.event = require("./event.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.congregation = require("./congregation.model.js")(sequelize, Sequelize);
db.communication = require("./communication.model.js")(sequelize, Sequelize);
db.personcontact = require("./personcontact.model.js")(sequelize, Sequelize);
db.group = require("./group.model.js")(sequelize, Sequelize);
db.groupmember = require("./groupmember.model.js")(sequelize, Sequelize);


db.person.hasMany(db.familyperson, {
  as: 'familyperson',
  foreignKey: 'per_ID'
});
db.familyperson.belongsTo(db.person, {
  as: 'person',
  foreignKey: 'per_ID'
});
db.family.hasMany(db.familyperson, {
  as: 'familyperson',
  foreignKey: 'fam_ID'
});
db.familyperson.belongsTo(db.family, {
  as: 'family',
  foreignKey: 'fam_ID'
});

db.person.hasMany(db.groupmember, {
  as: 'groupmember',
  foreignKey: 'per_ID'
  
});
db.groupmember.belongsTo(db.person, {
  as: 'person',
  foreignKey: 'per_ID'
  });

db.group.hasMany(db.groupmember, {
  as: 'groupmember',
  foreignKey: 'grp_ID'
});
db.groupmember.belongsTo(db.group, {
  as: 'group',
  foreignKey: 'grp_ID'
});

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.person.hasMany(db.personcontact, {
  as: 'personcontact',
  foreignKey: 'per_ID'
});
db.personcontact.belongsTo(db.person, {
  as: 'person',
  foreignKey: 'per_ID'
});
db.communication.hasMany(db.personcontact, {
  as: 'personcontact',
  foreignKey: 'com_ID'
});
db.personcontact.belongsTo(db.communication, {
  as: 'communication',
  foreignKey: 'com_ID'
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;