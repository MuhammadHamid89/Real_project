import 'dotenv/config'
import express from  'express'
import postRouter from './routes/postRoutes.js'
import mongoose from 'mongoose'
const app=express()


async function connectionDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongoDB connect successfully')
    } catch(error){
        console.log('mongo db connect fialed', error.message)
        process.exit(1)
    }
}

connectionDB()
const PORT = process.env.PORT  || 3000

app.use(express.json())
app.use('/api/posts',postRouter)
app.listen(PORT,()=>{
    console.log(`server run on port http://localhost: ${PORT}`)
})