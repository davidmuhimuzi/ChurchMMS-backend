module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    event_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    event_name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    start_date: {
      type: Sequelize.DATE
    },
    end_date: {
      type: Sequelize.DATE
    },

  }, {
    tableName: 'events'
  });
  return Event;
};