const Sequelize = require('sequelize')
const sequelize = require('./base')

const Model = Sequelize.Model
class Country extends Model {}
Country.init({
  // attributes
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'country',
  tableName: 'country',
  timestamps: false
})

module.exports = Country
