import React, { useState } from "react";
import Auth from "./axiosAuth";

const Login = (props) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    Auth()
      .post(`http://localhost:5000/api/login`, user)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubble-page");
      })
      .catch(err => console.log(err));
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>login here</p>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          placeholder="User Name"
          value={user.username}
          onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        ></input>
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
