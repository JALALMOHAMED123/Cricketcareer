const DataTypes = require('sequelize');
const sequelize = require('../util/database');

const Career = sequelize.define('Career', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  birth_place: {
    type: DataTypes.STRING,
    allowNull: false
  },
  career_path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  no_matches: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fifties: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  centuries: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  wickets: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  average: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Career;
