const Sequelize = require('sequelize')
const sequelize = require('./base')

const Model = Sequelize.Model
class Album extends Model {}
Album.init({
  // attributes
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: false
  },
  label: {
    type: Sequelize.STRING,
    allowNull: false
  },
  upc: {
    type: Sequelize.STRING,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    field: 'userid'
  },
  status: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize,
  modelName: 'album',
  timestamps: false
})

module.exports = Album
