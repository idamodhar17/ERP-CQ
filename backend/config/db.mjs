import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            maxPoolSize: 10,
        });
        console.log("Connected to mongo");
    } catch (err) {
        console.error("Mongo not connected", err.message);
        process.exit(1);
    }
};
export default connectDB