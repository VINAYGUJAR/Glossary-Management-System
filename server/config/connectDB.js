import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

if(!process.env.MONGODB_URI){
    throw new Error(
        "Please provide MONGODB_URI in the .env file"
    )
}

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connect DB")
    } catch (error) {
        if (error?.code === "ENOTFOUND" || error?.syscall === "querySrv") {
            let host = "the MongoDB host"
            try {
                host = new URL(process.env.MONGODB_URI).hostname
            } catch {
                // Keep the diagnostic useful without exposing the connection string.
            }
            console.error(
                `MongoDB DNS lookup failed for ${host}. ` +
                "Replace MONGODB_URI in server/.env with the current connection string from MongoDB Atlas."
            )
        } else {
            console.error("MongoDB connection failed:", error.message)
        }
        process.exit(1)
    }
}

export default connectDB