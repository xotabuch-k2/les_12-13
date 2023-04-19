import React, { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState({
    coffe: 0,
    sugar: 0,
  });

  const [showRemoveCoffe, setShowRemoveCoffe] = useState(false);
  const [showRemoveSugar, setShowRemoveSugar] = useState(false);

  const addCoffe = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        coffe: prevState.coffe + 1,
      };
    });
  const addSugar = () =>
    setProducts((prevState) => {
      return {
        ...prevState,
        sugar: prevState.sugar + 1,
      };
    });

  const removeCoffe = () => {
    if (products.coffe > 0) {
      setProducts((prevState) => {
        return {
          ...prevState,
          coffe: prevState.coffe - 1,
        };
      });
    }
  };
  const removeSugar = () => {
    if (products.sugar > 0) {
      setProducts((prevState) => {
        return {
          ...prevState,
          sugar: prevState.sugar - 1,
        };
      });
    }
  };

  const save = () => {
    localStorage.setItem("coffe", products.coffe);
    localStorage.setItem("sugar", products.sugar);
  };

  const clear = () => {
    localStorage.removeItem("coffe");
    localStorage.removeItem("sugar");
    setProducts({
      coffe: 0,
      sugar: 0,
    });
  };

  useEffect(() => {
    if (localStorage.getItem("coffe")) {
      setProducts((prevState) => {
        return {
          ...prevState,
          coffe: +localStorage.getItem("coffe"),
          sugar: +localStorage.getItem("sugar"),
        };
      });
    }
  }, []);

  useEffect(() => {
    setShowRemoveCoffe(products.coffe === 0 ? false : true);
    setShowRemoveSugar(products.sugar === 0 ? false : true);
  }, [products.coffe, products.sugar]);

  return (
    <div className="wrapper">
      <div className="list">
        <h1>Product list</h1>
        <div className="product">
          <span>{`Coffe: ${products.coffe}`}</span>
          <button onClick={addCoffe}>Add</button>
          {showRemoveCoffe && <button onClick={removeCoffe}>Remove</button>}
        </div>
        <div className="product">
          <span>{`Sugar: ${products.sugar}`}</span>
          <button onClick={addSugar}>Add</button>
          {showRemoveSugar && <button onClick={removeSugar}>Remove</button>}
        </div>
        <div className="save">
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export default App;
