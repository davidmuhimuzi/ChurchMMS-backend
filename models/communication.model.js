module.exports = (sequelize, Sequelize) => {
    const Communication = sequelize.define("communication", {
      com_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      vvg_ID: {
        type: Sequelize.INTEGER
      },
      vve_ID: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.STRING
      }
    }, {
      tableName: 'communications'
    });
    return Communication;
  };