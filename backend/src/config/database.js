
import mongoose from "mongoose";


const connectDB = async ()=>{
    try {
        const connectinInstance =await mongoose.connect()
        (`${process.env.MONGODB_URI}`)
        console.log(`\n Connected to database!!  ${connectinInstance.connection.host} `)
        
    } catch (error) {
        console.log("MongoDb failed",error);
        process.exit(1);
        
    }


}


export default connectDB;

