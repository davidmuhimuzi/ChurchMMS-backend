module.exports = (sequelize, Sequelize) => {
    const Family = sequelize.define("family", {
      family_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      family_name: {
        type: Sequelize.STRING
      },
      per_ID: {
        type: Sequelize.INTEGER
      }
    }, {
      tableName: 'family'
    });
    return Family;
  };