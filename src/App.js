import React, { useState, useEffect } from "react";

  function App () {
const [products, setProducts] = useState({
  coffe: 0,
  sugar: 0,
})


const addCoffe = () => setProducts((prevState) => {
  return {
    ...prevState,
    coffe: prevState.coffe + 1,
  }
});
const addSugar = () => setProducts((prevState) => {
  return {
    ...prevState,
    sugar: prevState.sugar + 1,
  }
});
const subCoffe = () => {
  if (products.coffe > 0) {
    setProducts((prevState) => {
      return {
        ...prevState,
        coffe: prevState.coffe - 1,
      };
    });
  }
};
const subSugar = () => {
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
  localStorage.setItem('coffe', coffe);
  localStorage.setItem('sugar', sugar);
}

const clear = () => {
    localStorage.removeItem('coffe');
    localStorage.removeItem('sugar');
    setCoffe(0);
    setSugar(0);
}

useEffect(()=>{
  if (localStorage.getItem('coffe')){
    setCoffe(+localStorage.getItem('coffe'));
    setSugar(+localStorage.getItem('sugar'));

  }
}, []);
return (
  <div className="wrapper">
    <div className="list">
      <h1>Product list</h1>
      <div className='product'>
      <span>{`Coffe: ${products.coffe}`}</span>
      <button onClick={addCoffe}>Add</button>
      <button onClick={subCoffe}>Remove</button>
      </div>
      <div className='product'>
      <span>{`Sugar: ${products.sugar}`}</span>
        <button onClick={addSugar}>Add</button>
        <button onClick={subSugar}>Remove</button>
      </div>
      <div className='save'>
          <button onClick={save}>SAVE</button>
          <button onClick={clear}>CLEAR</button>
        </div>
    </div>
  </div> 
  );
}

export default App;
