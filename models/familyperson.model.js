module.exports = (sequelize, Sequelize) => {
    const Familyperson = sequelize.define("familyperson", {
      fp_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      fam_ID: {
        type: Sequelize.INTEGER
      },
      per_ID: {
        type: Sequelize.INTEGER
      },
      fam_role: {
        type: Sequelize.STRING
      }
    }, {
      tableName: 'familyperson'
    });
    return Familyperson;
  };