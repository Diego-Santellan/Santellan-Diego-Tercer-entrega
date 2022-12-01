// http y express
const express = require('express')
const moment = require('moment')
const app = express()

app.get("/productos", (req, res) => {
    res.send() => {
        try {
            await fs.promises.readFile("products.txt", "utf-8");
            let listProducts = products.map(function (product){
                return product.title
            })
        } catch (error) {
            console.log(error);
        }
    };
});


app.get("/productoRandom", (req, res) => {
    res.send(products){
        return products[Math.floor(Math.random() * products.length)]
    };
});



const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Listening app port ${server.address().port}`);
})

//Encaso de que no funcione marca el error
server.on('error', (error) => {     
    console.log('Error:', error);
})