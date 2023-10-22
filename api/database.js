import mongoose from "mongoose"
import { MONGODB_KEY } from "./key.js"

const databaseUrl = MONGODB_KEY;
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