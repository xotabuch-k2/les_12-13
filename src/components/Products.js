import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {

  const coffee = useSelector((state) => state.coffee)
  const sugar = useSelector((state) => state.sugar)
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const dispatchFunc = useDispatch();

  const increment = () => {
    dispatchFunc({ type: 'incrementCoffee' })
  }
  const decrement = () => {
    dispatchFunc({ type: 'decrementCoffee' })
  }
  const increase = () => {
    dispatchFunc({ type: 'increase', number: 10 })
  }
  const decrease = () => {
    dispatchFunc({ type: 'increase', number: -10 })
  }

  const incrementS = () => {
    dispatchFunc({ type: 'incrementSugar' })
  }
  const decrementS = () => {
    dispatchFunc({ type: 'decrementSugar' })
  }
  const increaseS = () => {
    dispatchFunc({ type: 'increaseS', number: 10 })
  }
  const decreaseS = () => {
    dispatchFunc({ type: 'increaseS', number: -10 })
  }
  return (
    <>
      <div className='product'>
        <span>{`Coffee: ${coffee}`}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        {isLoggedIn && <button onClick={increase}>+10</button>}
        {isLoggedIn && <button onClick={decrease}>-10</button>}
      </div>
      <div className='product'>
        <span>{`Sugar: ${sugar}`}</span>
        <button onClick={incrementS}>+</button>
        <button onClick={decrementS}>-</button>
        {isLoggedIn && <button onClick={increaseS}>+10</button>}
        {isLoggedIn && <button onClick={decreaseS}>-10</button>}
      </div>
    </>
  )
}

export default Products