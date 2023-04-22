import React  from "react";

function AddComp (props) {

const {validateInput, changeName, newProduct, isValid, changePrice, addProduct} = props;
    return(
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
    )
}
export default AddComp;