import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'
const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()
const PORT = process.env.PORT || 4000
const MongodbUrl = process.env.MongoDBURL

// Connect to Mongodb
try {
    mongoose.connect(MongodbUrl)
    console.log("Connected to Mongodb");
} catch (error) {
        console.log("Error :",  error);    
}

//Defining routes 
app.use("/book",bookRoute)
app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
