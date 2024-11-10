import "./Login.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext.jsx";
import { loginAccount } from "../../Services/authService";

const url = "http://localhost:3001/api/auth/login";

export function Login() {
  const { auth, updateAuth } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const account = {
      email: document.getElementById("emailInput").value,
      password: document.getElementById("passwordInput").value,
    };

    console.log(account);
    const success = loginAccount(account, updateAuth);
    if (success) navigate("/");
  }

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
                type={show ? "text" : "password"}
                placeholder="********"
                id="passwordInput"
              />
              <span onClick={() => setShow(!show)} className="passwordEye">
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        </form>

        <button className="button is-danger" onClick={handleSubmit}>
          Sign in
        </button>
        <p className="orText">or</p>
        <p className="text">
          Create account <Link to="/register">here</Link>
        </p>
      </div>
    </div>
  );
}
