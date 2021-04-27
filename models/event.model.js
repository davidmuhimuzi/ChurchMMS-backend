module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("event", {
    evt_ID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true
    },
    event_name: {
      type: Sequelize.STRING
    },
    event_desc: {
      type: Sequelize.STRING
    },
    event_date: {
      type: Sequelize.DATE
    },
    event_end: {
      type: Sequelize.TIME
    },
    event_start: {
      type: Sequelize.TIME
    },
    loc_ID: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.STRING
    },
    attendance: {
      type: Sequelize.INTEGER
    }

  }, 
  {
    tableName: 'event'
  });
  return Event;
};