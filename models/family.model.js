module.exports = (sequelize, Sequelize) => {
    const Family = sequelize.define("family", {
      fam_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      fam_name: {
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