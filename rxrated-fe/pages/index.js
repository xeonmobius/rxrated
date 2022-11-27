import axios from "axios";
import React, { useState } from "react";
import Router, { useRouter } from "next/router";

const validateEmail = (email) => {
  // regex to validate 99.99% email format
  const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(email);
};

export default function Home() {
  const [myForm, setMyForm] = useState({ email: "", password: "" });

  const router = useRouter();

  const onEmailChange = (e) => {
    e.preventDefault();
    setMyForm({ ...myForm, email: e.target.value });
  };

  const onUsernameChange = (e) => {
    e.preventDefault();
    setMyForm({ ...myForm, username: e.target.value });
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    setMyForm({ ...myForm, password: e.target.value });
  };

  const signup = async (e) => {
    e.preventDefault();

    const payload = {
      username: myForm.username,
      email: myForm.email,
      password: myForm.password,
    };

    const { data, status } = await axios.post(
      "http://localhost:8000/login/",
      payload
    );

    if (status === 200) {
      console.info(data);
      //router.push("/home");
    }
  };

  return (
    <form onSubmit={signup}>
      <label>username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={myForm.username}
        onChange={(e) => onUsernameChange(e)}
      />
      <br></br>
      <label>email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={myForm.email}
        onChange={(e) => onEmailChange(e)}
      />
      <br></br>
      <label>password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={myForm.password}
        onChange={(e) => onPasswordChange(e)}
      />
      <br></br>
      <button type="submit">Login</button>
    </form>
  );
}
