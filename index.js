import express from 'express'
import mongoose from 'mongoose';
import 'dotenv/config'
import { Product } from './model/product.js';

const PORT = 3000;
const url = 'mongodb+srv://xotabuch-k2:Nfhenbyj68@learn.7mjqj3b.mongodb.net/';
const app = express();
app.use(express.static('css'));
app.set('view engine', 'pug');

mongoose.connect(url)
        .then(()=> {
            console.log('Connected to DB');
            app.listen(PORT, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })
        })
        .catch((err)=> {console.log(`DB connection error: ${err}`)});

        app.get('/', (req, res) => {
            Product.find()
                .then(products => {
                const productsHtml = products.map(product => `
        <div style="border: 1px solid #000; 
        width: fit-content; 
        margin: 0 0 20px 0; 
        padding: 0 10px">
          <h2>${product.title}</h2>
          <p>Price: ${product.price}</p>
        </div>
                `);
                const html = `<h1>Products:</h1> ${productsHtml.join('')}`;
                res.send(html);
                })
                .catch(error => {
                console.error(error);
                });
            });
        
