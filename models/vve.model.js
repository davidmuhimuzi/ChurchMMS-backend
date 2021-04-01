module.exports = (sequelize, Sequelize) => {
    const Vve = sequelize.define("vve", {
      vve_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      vve_name: {
        type: Sequelize.STRING
      },
      vvg_ID: {
        type: Sequelize.INTEGER
      }
    }, {
      tableName: 'validvalueentry'
    });
    return Vve;
  };