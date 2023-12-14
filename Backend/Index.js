const dotenv = require("dotenv");
const connectDB = require("./db/dbConnection.js");
const { app } = require("./app.js");

dotenv.config({
    path: './.env'
});

// mongodb connection
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
