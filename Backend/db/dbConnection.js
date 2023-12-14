const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb Connected Successfully ..!!");
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
    }
};

module.exports = connectDB;
