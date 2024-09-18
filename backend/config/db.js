import mongoose from "mongoose";

export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://amugune:13842001@cluster0.5vr90.mongodb.net/food-del').then(() => {
            console.log("Connected to MongoDB");
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
}

export default connectDB;