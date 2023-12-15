const dotenv = require("dotenv");
const connectDB = require("./db/dbConnection.js");
const { app } = require("./app.js");

dotenv.config({
    path: './.env'
});
const PORT=8000
// mongodb connection
connectDB()
    .then(() => {
        app.listen(8000, () => {
            console.log(`⚙️ Server is running at port : ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
