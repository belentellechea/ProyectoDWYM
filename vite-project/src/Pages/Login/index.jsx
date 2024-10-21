//import { Image } from "antd";
import "./Login.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        //guardar el token JWT en localStorage o sessionStorage
        localStorage.setItem("token", data.token);

        //redirigir a la página principal
        window.location.href = "/";
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Error en las credenciales");
      }
    } catch (error) {
      setErrorMessage("Error del servidor");
    }
  };

  return (
    <div className="loginBackground">
      <div className="loginDiv">
        <img src={logo} className="logo" alt="Logo fakestagram" />
        <h1 className="title is-1">Fakestagram</h1>

        <div class="formDiv">
          <div className="field loginLabel">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="email"
                placeholder="e.g. alex@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div class="field  loginLabel">
            <label class="label">Password</label>
            <div class="control">
              <input 
                class="input" 
                type="password" 
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>
        </div>

        {errorMessage && <p className="error">{errorMessage}</p>}

        <button className="button is-danger" onClick={handleLogin}>Sign in</button>
        <p className="text">
          Create account <strong>here</strong>
        </p>
      </div>
    </div>
  );
}
