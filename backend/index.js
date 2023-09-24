const express = require('express')
const app = express()
const cors = require('cors')
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())


let cart = []

app.get('/api/products', (req, res) => {
    fs.readFile('data/products.json', 'utf8', (err, data) => {
        if (err) {
            return res.header("Access-Control-Allow-Origin", "*").status(500).json({ error: 'Error reading data file' })
        }
        try {
            const jsonData = JSON.parse(data)
            res.header("Access-Control-Allow-Origin", "*").status(200).json(jsonData)
        } catch (parseError) {
            res.header("Access-Control-Allow-Origin", "*").status(500).json({ error: 'Error parsing data file' })
        }
    })
})

app.get('/api/models', (req, res) => {
    fs.readFile('data/products.json', 'utf8', (err, data) => {
        if (err) {
            return res.header("Access-Control-Allow-Origin", "*").status(500).json({ error: 'Error reading data file' })
        }
        try {
            const products = JSON.parse(data)
            const models = Array.from(new Set(products.map((product) => product.model)))
            res.header("Access-Control-Allow-Origin", "*").status(200).json(models)
        } catch (parseError) {
            res.header("Access-Control-Allow-Origin", "*").status(500).json({ error: 'Error parsing data file' })
        }
    })
})

app.get('/api/brands', (req, res) => {
    fs.readFile('data/products.json', 'utf8', (err, data) => {
        if (err) {
            return res.header("Access-Control-Allow-Origin", "*").status(500).json({ error: 'Error reading data file' })
        }
        try {
            const products = JSON.parse(data)
            const brands = Array.from(new Set(products.map((product) => product.brand)))
            res.header("Access-Control-Allow-Origin", "*").status(200).json(brands)
        } catch (parseError) {
            res.header("Access-Control-Allow-Origin", "*").status(500).json({ error: 'Error parsing data file' })
        }
    })
})

app.get('/api/cart', (req, res) => {
    fs.readFile('data/cart.json', 'utf8', (err, data) => {
        if (err) {
            return res.header("Access-Control-Allow-Origin", "*").status(500).json({ error: 'Error reading data file' })
        }
        try {
            const jsonData = JSON.parse(data)
            res.header("Access-Control-Allow-Origin", "*").status(200).json(jsonData)
        } catch (parseError) {
            res.header("Access-Control-Allow-Origin", "*").status(500).json({ error: 'Error parsing data file' })
        }
    })
})

app.post('/api/cart', (req, res) => {
    const newData = req.body
    fs.writeFile('data/cart.json', JSON.stringify(newData), (writeErr) => {
        if (writeErr) {
            return res.status(500).json({ error: 'Error writing data to file' })
        }
        res.status(200).json({ message: 'Data replaced successfully' })
    })
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})
