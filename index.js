const express = require("express")
let app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const categories = require('./Data/categories.json')

app.get('/', (req, res) =>{
    res.send('News API Running')
});

app.get('/news-categories', (req, res)=>{
    res.send(categories)
})

app.listen(port, () => {
    console.log('Taja News Server', port)
})