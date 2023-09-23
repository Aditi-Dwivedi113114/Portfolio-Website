const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('msg_db', 'root', 'Aditi@123', {
  host: 'localhost',   // Change to your database host
  dialect: 'mysql'     // Specify the database dialect
});

// Define a model for your table
const FormData = sequelize.define('FormData', {
  name: {
    type: Sequelize.STRING, // Use Sequelize.STRING for string data type
    allowNull: false
  },
  email: {
    type: Sequelize.STRING, // Use Sequelize.STRING for string data type
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING, // Use Sequelize.STRING for string data type
    allowNull: false
  },
  message: {
    type: Sequelize.TEXT, // Use Sequelize.TEXT for text data type
    allowNull: false
  }
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database and table synced.');
  })
  .catch(err => {
    throw err;
  });

module.exports = FormData;
