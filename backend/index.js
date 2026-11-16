import 'dotenv/config'
import express from  'express'
import postRouter from './routes/postRoutes.js'
const app=express()
const PORT = process.env.PORT  || 3000

app.use(express.json())
app.use('/api/posts',postRouter)
app.listen(PORT,()=>{
    console.log(`server run on port http://localhost: ${PORT}`)
})