import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const dbConnect = () => {

try {
    mongoose.connect(process.env.MONGOURL).then(() => console.log("connected"))
} catch (error) {
console.log(error)
}
}

export default dbConnect