import React, { useState } from "react";

  function App () {

  const [Name, setName] = useState('');
  const [Login, setLogin] = useState('');
  const [Age, setAge] = useState('');
  const [Email, setEmail] = useState('');

  const [NameValid, setNameValid] = useState(true);
  const [LoginlValid, setLoginValid] = useState(true);
  const [AgeValid, setAgeValid] = useState(true);
  const [EmailValid, setEmailValid] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    console.log(Name, Login, Age, Email);
  }

  const nameChange = e => {
    setName(e.target.value);
    setNameValid( /^[a-zA-Z]+$/.test(e.target.value) || e.target.value.length>=1)

  }
  const loginChange = e => {
    setLogin(e.target.value);
    setLoginValid(e.target.value.length >= 5);

  } 
  const ageChange = e => {
    setAge(e.target.value);
    setAgeValid(e.target.value>=18);
  } 
  const emailChange = e => {
    setEmail(e.target.value);
    setEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value));
    
  } 

  return (
  <div className="wrapper">
  <form onSubmit={submit}>
    <label >Name</label>
    <input className={NameValid ? '' : "invalid"} onChange={nameChange} />
    {!NameValid && <p>Enter correct Name</p>}

    <label>Login</label>
    <input className={LoginlValid ? '' : "invalid"} onChange={loginChange} />
    {!LoginlValid && <p>Enter correct Login</p>}

    <label>Age</label>
    <input className={AgeValid ? '' : "invalid"} onChange={ageChange} />
    {!AgeValid && <p>Enter correct Age</p>}

    <label>Email</label>
    <input  className={EmailValid ? '' : "invalid"} onChange={emailChange} />
    {!EmailValid && <p>Enter correct Email</p>}


    <button type="submit">Sign in</button>
  </form>
  </div>
  )
}

export default App;