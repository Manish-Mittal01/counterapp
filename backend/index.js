const mongoose = require("mongoose");
const app = require("./app");
require("dotenv/config")

mongoose.set("strictQuery", false);

connectDatabase = async () => {
    console.log("Connecting to Database ...");

    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    return mongoose.connection;
};


const main = async () => {
    await connectDatabase().then((db) => {
        db.on("error", function (err) {
            console.error("Failed to connect to database", err);
            process.exit(1);
        });

        db.once("open", function () {
            console.info("Connected to database");
            const port = process.env.PORT || 8000
            app.listen(port, () => {
                console.log(`App is running on ${port}`);
            });
        });
    });
};

main();
