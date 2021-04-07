module.exports = (sequelize, Sequelize) => {
    const Personcontact = sequelize.define("personcontact", {
      cpc_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      com_ID: {
        type: Sequelize.INTEGER
      },
      per_ID: {
        type: Sequelize.INTEGER
      }
    }, {
      tableName: 'personcontact'
    });
    return Personcontact;
  };