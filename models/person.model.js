module.exports = (sequelize, Sequelize) => {
    const Person= sequelize.define("person", {
      per_ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
  
      },
      fam_ID: {
        type: Sequelize.INTEGER

      },
      frst_name: {
        type: Sequelize.STRING,
      },
      midl_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      user_name: {
        type: Sequelize.STRING,
      },
      role_value: {
        type: Sequelize.INTEGER,
      },
      password: {
        type: Sequelize.STRING,
      },
      bday: {
        type: Sequelize.DATE,
      },
      baptised: {
        type: Sequelize.INTEGER,
      },
      bapt_date: {
        type: Sequelize.DATE,
      },
      employer: {
        type: Sequelize.STRING,
      },
      pub_permission: {
        type: Sequelize.STRING,
      },
      church_pos: {
        type: Sequelize.STRING,
      },
      fam_pos: {
        type: Sequelize.INTEGER,
      },
      notes: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      }
    }, {
      tableName: 'person'
    });
    return Person;
  };