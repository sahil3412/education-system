const mongoose = require('mongoose');
const dbURI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
