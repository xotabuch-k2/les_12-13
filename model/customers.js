import mongoose from 'mongoose';
const { Schema } = mongoose;

const customerSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  product_id: { type: Schema.Types.ObjectId, ref: 'Product' }
});

const productSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  price: Number,
  rating: Number,
  category: String,
  brand: String
});

const Customer = mongoose.model('Customer', customerSchema);
const Product = mongoose.model('Product', productSchema);
export { Customer, Product };
