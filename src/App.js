import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input {...register("name", { required: true, pattern: /^[a-zA-Z]+$/ })} />
        {errors.name?.type === "required" && <p>Enter your name</p>}
        {errors.name?.type === "pattern" && <p>Enter a valid name</p>}

        <label htmlFor="login">Login</label>
        <input {...register("login", { required: true, minLength: 5 })} />
        {errors.login?.type === "required" && <p>Enter your login</p>}
        {errors.login?.type === "minLength" && <p>Login should have at least 5 characters</p>}

        <label htmlFor="age">Age</label>
        <input {...register("age", { required: true, min: 18 })} />
        {errors.age?.type === "required" && <p>Enter your age</p>}
        {errors.age?.type === "min" && <p>You must be at least 18 years old</p>}

        <label htmlFor="email">Email</label>
        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
        {errors.email?.type === "required" && <p>Enter your email</p>}
        {errors.email?.type === "pattern" && <p>Enter a valid email</p>}

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;