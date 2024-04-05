import mongoose from "mongoose";
import 'dotenv/config';


const dbConnection = async () => {
    const databaseUrl = process.env.MONGODB_URL
    try {
        await mongoose.connect(
            databaseUrl,
            { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database successfully connected')
    } catch (error) {
        console.error(`Database Connectivity Error: ${error}`)
        throw new Error(error)
    }
}
export default dbConnection