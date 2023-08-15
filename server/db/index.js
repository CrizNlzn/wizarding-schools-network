"use strict";

const { Sequelize, db } = require("./db");

// Require your models and make your associations

// DEFINING SCHOOL
const WizSchool = db.define('WizSchool', {

  name: {
    type: Sequelize.STRING,
    allowNull: false, 
  },

  imageURL : {
    type: Sequelize.STRING,
  },

  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.TEXT,
  },
});

//DEFINING STUDENTS
const WizStudent = db.define('WizStudent', {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
      validate: {
        isEmail: {
          msg: 'Please enter email address',
        },
      },
  },

  imageURL: {
    type: Sequelize.STRING,
  },

  magicalAbilityScore: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isFloat: {
        args: [0.0, 10.0],
        msg: 'Magical Ability has to be between a score of 0.0 - 10.0',
      },
    },
  },
});


//ASSOCIATIONS:
WizSchool.hasMany(WizStudent);
WizStudent.hasOne(WizSchool);
module.exports = { WizSchool, WizStudent, db };
