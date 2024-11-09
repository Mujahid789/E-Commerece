import mongoose from "mongoose";

const dbConnection = async() =>{
    try {
        let conn = await mongoose.connect(process.env.Mongo_Url);
        console.log(`Database connected succesfully..!!`.bgMagenta)
    } catch (error) {
        console.log(`Error in Database Connection`.bgRed)
    }
}
export default dbConnection;