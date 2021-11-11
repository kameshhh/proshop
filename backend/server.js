const express = require('express');
const products = require('./data/products');
const app = express();
const dotenv = require('dotenv');


dotenv.config();


app.use(express.json({ extended: false }))
app.get('/', (req, res) => {
    res.send("This is An APpp")
})

app.get('/api/products', (req, res) => {
    res.json(products)

})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running in ${process.env.NODE_ENV} mode on ${PORT}`)
})