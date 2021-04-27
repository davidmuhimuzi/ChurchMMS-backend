module.exports = (sequelize, Sequelize) => {
    const Family = sequelize.define("family", {
      fam_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      fam_pic: {
        type: Sequelize.STRING
      },
      fam_name: {
        type: Sequelize.STRING
      },
      per_ID: {
        type: Sequelize.INTEGER
      },
      fam_email: {
        type: Sequelize.STRING
      },
      fam_phone: {
        type: Sequelize.STRING
      },
      fam_address: {
        type: Sequelize.STRING
      }
    }, {
      tableName: 'family'
    });
    return Family;
  };