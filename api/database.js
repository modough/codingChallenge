import mongoose from "mongoose"
import 'dotenv/config'

const databaseUrl = `mongodb+srv://mouhamedmbaye1:${process.env.MONGODB_PASSWORD}@cluster0.ytzghfb.mongodb.net/`;

const dbConnection = async () => {
    try {
        await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database successfully connected')
    } catch (error) {
        console.error(`Database Connectivity Error: ${error}`)
        throw new Error(error)
    }
}
export default dbConnection