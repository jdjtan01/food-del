import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://jdjtan01:Jn6tz0xGJyL6qH79@cluster0.lzqlcsy.mongodb.net/food-del').then(() => console.log("DB connected"));
}