import "./Login.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3001/api/auth/login"; 

export function Login({setUser}) {
  const navigate = useNavigate(); 

  function handleSubmit(event) {
    event.preventDefault(); 

    const account = {
      email: document.getElementById('emailInput').value,
      password: document.getElementById('passwordInput').value,
    }

    console.log(account); 
    postAccount(account); 

  }

  async function postAccount(account) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });

      if (response.status === 200) {
        const userData = await response.json();
        setUser(userData); 
        
        if (userData.token) {
          localStorage.setItem("token", userData.token);
          localStorage.setItem("user", JSON.stringify(userData))
          navigate("/"); 
        } else {
          console.log("Token no recibido");
        }

      } else if (response.status === 401) {
        alert("Credenciales incorrectas"); 
      } else {
        console.log("Error al inciar sesión"); 
      }
    } catch (error) {
      console.log("Error del servidor", error);
    }
  };

  return (
    <div className="loginBackground">
      <div className="loginDiv">
        <img src={logo} className="logo" alt="Logo fakestagram" />
        <h1 className="title is-1"> Fakestagram </h1>

        <form className="formDiv">
          <div className="field loginLabel">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="e.g. alex@example.com"
                id="emailInput"
              />
            </div>
          </div>

          <div className="field  loginLabel">
            <label className="label">Password</label>
            <div className="control">
              <input 
                className="input" 
                type="password" 
                placeholder="********"
                id="passwordInput"
              />
            </div>
          </div>
        </form>

        <button className="button is-danger" onClick={handleSubmit}>Sign in</button>
        <p className="orText">or</p>
        <p className="text">
          Create account <Link to="/register">here</Link>
        </p>
      </div>
    </div>
  );
}
