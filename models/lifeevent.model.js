module.exports = (sequelize, Sequelize) => {
    const LifeEvent= sequelize.define("lifeevent", {
     event_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
  
      },
      event_date: {
        type: Sequelize.STRING,

      },

      event_note: {
        type: Sequelize.STRING,
      },
    }, {
      tableName: 'lifeevent'
    });
    return LifeEvent;
  };