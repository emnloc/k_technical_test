const Sequelize = require('sequelize')
const sequelize = require('./base')

const Model = Sequelize.Model
class User extends Model {}
User.init({
  // attributes
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  countryCode: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'countrycode'
  },
  status: {
    type: Sequelize.INTEGER
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
})

module.exports = User
