import React, { useState } from "react";
import Product from "./components/Product";

function App() {
  const productsList = [
    { name: "Iphone", price: 800, id: 1 },
    { name: "Watch", price: 100, id: 2 },
  ];
  const [products, setProducts] = useState(productsList);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", id: 3 });
  const [isValid, setIsValid] = useState({ name: true, price: true });

  const validateInput = (value, type) => {
    if (type === "name") {
      const lettersOnly = /^[A-Za-z]+$/;
      if (value.trim().length < 2 || !lettersOnly.test(value)) {
        setIsValid((prev) => ({ ...prev, name: false }));
        return false;
      }
      setIsValid((prev) => ({ ...prev, name: true }));
      return true;
    } else if (type === "price") {
      if (value <= 0) {
        setIsValid((prev) => ({ ...prev, price: false }));
        return false;
      }
      setIsValid((prev) => ({ ...prev, price: true }));
      return true;
    }
  };

  const changeName = (e) => {
    setNewProduct((prev) => ({ ...prev, name: e.target.value }));
    validateInput(e.target.value, "name");
  };

  const changePrice = (e) => {
    setNewProduct((prev) => ({ ...prev, price: e.target.value }));
    validateInput(e.target.value, "price");
  };

  const addProduct = () => {
    if (isValid.name && isValid.price) {
      let key = Math.random();
      setNewProduct((prev) => ({ ...prev, id: key }));
      setProducts((prev) => [...prev, newProduct]);
      setNewProduct({ name: "", price: "", id: 3 });
    }
  };

  const removeProduct = (id) => {
    const newList = products.filter((product) => product.id !== id);
    setProducts(newList);
  };

  return (
    <div className="wrapper">
      <div className="add">
        <label>Product name</label>
        <input
          onBlur={(e) => validateInput(e.target.value, "name")}
          onChange={changeName}
          type="text"
          value={newProduct.name}
        />
        {!isValid.name && <span>Please enter a valid name</span>}
        <label>Product price</label>
        <input
          onBlur={(e) => validateInput(e.target.value, "price")}
          onChange={changePrice}
          type="number"
          value={newProduct.price}
        />
        {!isValid.price && <span>Please enter a valid price</span>}
        <button onClick={addProduct} type="button">
          Add
        </button>
      </div>
      <div className="list">
        {products.map((product) => (
          <Product
            onRemove={removeProduct}
            key={product.id}
            id={product.id}
            name={product.name}
            price={`${product.price} $`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
