const mongoose = require('mongoose');

// connecting to the MONGODB database
mongoose.connect('mongodb+srv://anjali:patil@cluster0.bn3jisl.mongodb.net/?retryWrites=true&w=majority');
// getting the connection and storing it in variable db
const db = mongoose.connection;

// handling error
db.on('error', console.error.bind(console, 'error connecting to the database: MONGODB'));
db.once('open', () => console.log('connected to the database: MONGODB'));

module.exports = db;