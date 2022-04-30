const express = require('express')
const app = express()
const PORT = 3000

const mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'customer_db'
});

connection.connect(err => { // error first callbacks
    if(err) {
        console.log(err)
        console.log(`❌ Problem in Connecting With Db`)
    }else {
        console.log(`✅ Successfully Connected`)
    }
})

app.get('/', (request, response) => {
    response.send('<h1> Welcome to MEAN Stack </h1>')
})

app.get('/abc', (request, response) => {
    response.json( { year : 2022, url :'https://google.com' } )
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})