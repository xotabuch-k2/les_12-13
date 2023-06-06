import express from 'express';
import mongoose from 'mongoose';
import { Customer } from './model/customers.js';

const PORT = 3000;
const url = '';
const app = express();

mongoose.connect(url)
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`DB connection error: ${err}`);
  });

  app.get('/', (req, res) => {
    Customer.find()
      .populate('product_id')
      .then((customers) => {
        const productsHtml = customers.map((customer) => `
          <div style="border: 1px solid #000; width: fit-content; margin: 0 0 20px 0; padding: 0 10px">
            <span>${customer.name}:</span> <span style="padding: 0 10px">${customer.product_id.title}</span>  <span>Price: ${customer.product_id.price}</span>
          </div>
        `);
  
        const html = `<h1>Users purchases:</h1> ${productsHtml.join('')}`;
        res.send(html);
      })
      .catch((error) => {
        console.error(error);
      });
  });