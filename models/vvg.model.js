module.exports = (sequelize, Sequelize) => {
    const Vvg = sequelize.define("vvg", {
      vvg_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      vvg_name: {
        type: Sequelize.STRING
      },
      vvg_code: {
        type: Sequelize.INTEGER
      }
    }, {
      tableName: 'validvaluegroup'
    });
    return Vvg;
  };