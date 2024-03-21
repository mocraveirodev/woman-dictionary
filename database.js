import mongoose from "mongoose";
require('dotenv').config();

async function connectDatabase() {
    try {
        console.info("Trying to connect to database..");

        await mongoose.connect(process.env.MONGO_URL);

        console.info("Database connected!");
    } catch (error) {
        console.error(error);
    }
}

export default connectDatabase;