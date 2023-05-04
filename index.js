import express from 'express'
import dotenv from 'dotenv'
import db from './config/Database.js'
import router from './routes/index.js'
import cors from 'cors'
const  app = express()

const PORT = 3001
app.use(cors())
dotenv.config()

try {
    await db.authenticate()
    console.log('Database Connected...');
} catch (error) {
    console.log(error);
}
app.use(express.json())
app.use(router)

app.listen(PORT, ()=> console.log('Server Runing On Port ' + PORT))

