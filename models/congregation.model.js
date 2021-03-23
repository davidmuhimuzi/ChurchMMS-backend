module.exports = (sequelize, Sequelize) => {
    const Congregation= sequelize.define("congregation", {
     con_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
  
      },
      con_name: {
        type: Sequelize.STRING,

      },

      con_addrs: {
        type: Sequelize.STRING,
      },
    }, {
      tableName: 'congregation'
    });
    return Congregation;
  };