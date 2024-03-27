const mongoose = require('mongoose');
require('dotenv').config();
// const connection = mongoose.connect(`mongodb + srv://akhileshtakawale703:akhileshtakawale703@cluster0.47wrssa.mongodb.net/GreenMentor`);
const connection = mongoose.connect(process.env.MONGO_URI);

module.exports = connection;
