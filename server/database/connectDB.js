import mongoose, { connect } from "mongoose";


export const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGO_URI);
    console.log(`Database was connected succesfully on port ${conn.connection.port}`)
  } catch (error) {
    console.log("Connection Error", error)
  }
}