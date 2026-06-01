import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

function Login() {

  const [username,setUsername] =
    useState("");

  const [password,setPassword] =
    useState("");

  const login = () => {

    if (
      username === "admin" &&
      password === "123456"
    ) {

      localStorage.setItem(
        "user",
        JSON.stringify({
          username:"admin",
          role:"admin"
        })
      );

      alert("Login berhasil");

      return;
    }

    if (
      username === "user" &&
      password === "123456"
    ) {

      localStorage.setItem(
        "user",
        JSON.stringify({
          username:"user",
          role:"user"
        })
      );

      alert("Login berhasil");

      return;
    }

    alert("Username atau password salah");
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth:"400px",
          margin:"40px auto"
        }}
      >

        <h1>Login</h1>

        <br />

        <input
          placeholder="Username"
          value={username}
          onChange={(e)=>
            setUsername(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button onClick={login}>
          Login
        </button>

      </div>

    </>
  );
}

export default Login;