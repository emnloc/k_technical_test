const Sequelize = require('sequelize')
const sequelize = require('./base')

const Model = Sequelize.Model
class Track extends Model {}
Track.init({
  // attributes
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isrc: {
    type: Sequelize.STRING,
    allowNull: false
  },
  albumId: {
    type: Sequelize.INTEGER,
    field: 'albumid'
  },
  genre: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER,
    field: 'userid'
  },
  status: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize,
  modelName: 'track',
  timestamps: false
})

module.exports = Track
