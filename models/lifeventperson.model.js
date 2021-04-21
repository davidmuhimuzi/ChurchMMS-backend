module.exports = (sequelize, Sequelize) => {
    const lifeventperson = sequelize.define("lifeventperson", {
      lep_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      event_ID: {
        type: Sequelize.INTEGER
      },
      lep_ID: {
        type: Sequelize.INTEGER
      },
      vvg_ID: {
        type: Sequelize.INTEGER
      },
      vve_ID: {
        type: Sequelize.INTEGER
      },
    }, {
      tableName: 'lifeventperson'
    });
    return lifeventperson;
  };