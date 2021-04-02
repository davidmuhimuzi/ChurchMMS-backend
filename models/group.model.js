module.exports = (sequelize, Sequelize) => {
    const Group = sequelize.define("group", {
      grp_ID: {
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
      grp_name: {
        type: Sequelize.STRING
      },
      per_ID: {
        type: Sequelize.INTEGER
      }
    }, {
      tableName: 'group'
    });
    return Group;
  };