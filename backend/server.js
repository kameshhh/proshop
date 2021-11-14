import express from 'express';
// import products from './data/products.js';
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


const app = express();


dotenv.config();

connectDB();


app.use(express.json({ extended: false }))
app.get('/', (req, res) => {
    res.send("This is An App")
})

app.use('/api/products', productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`)
})