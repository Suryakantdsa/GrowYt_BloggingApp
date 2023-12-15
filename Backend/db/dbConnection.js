const mongoose = require("mongoose");
const uri="mongodb+srv://Suryakant:Suryadas@cluster0.mydbwj6.mongodb.net/BloggingApp?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(uri);
        console.log("Mongodb Connected Successfully ..!!");
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
    }
};

module.exports = connectDB;
