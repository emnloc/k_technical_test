const Sequelize = require('sequelize')

// Option 1: Passing parameters separately
let sequelize = null

if (!sequelize) {
  sequelize = new Sequelize('bquate_test_musica', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 8889
  })
}

module.exports = sequelize
