module.exports = (sequelize, Sequelize) => {
    const Groupmember = sequelize.define("groupmember", {
      gm_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      grp_ID: {
        type: Sequelize.INTEGER
      },
      per_ID: {
        type: Sequelize.INTEGER
      },
      vvg_ID: {
        type: Sequelize.INTEGER
      },
      vve_ID: {
        type: Sequelize.INTEGER
      },
      grp_role: {
        type: Sequelize.STRING
      }
    }, {
      tableName: 'groupmember'
    });
    return Groupmember;
  };