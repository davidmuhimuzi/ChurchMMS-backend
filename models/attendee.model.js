module.exports = (sequelize, Sequelize) => {
    const Attendee = sequelize.define("attendee", {
      atd_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        autoIncrement: true
      },
      evt_ID: {
        type: Sequelize.INTEGER
      },
      per_ID: {
        type: Sequelize.INTEGER
      },
      user_ID: {
        type: Sequelize.INTEGER
      },
      contribution: {
          type: Sequelize.STRING
      }
    }, {
      tableName: 'attendee'
    });
    return Attendee;
  };