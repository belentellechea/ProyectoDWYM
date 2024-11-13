import logo from "../../assets/logoSider2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../Context/AuthContext.jsx";
import { loginAccount } from "../../Services/authService";
import style from "./Login.module.css";

const url = "http://localhost:3001/api/auth/login";

export function Login() {
  const { auth, updateAuth } = useAuth();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    const account = {
      email: document.getElementById("emailInput").value,
      password: document.getElementById("passwordInput").value,
    };

    console.log(account);
    const success = await loginAccount(account, updateAuth);
    console.log(success);
    if (!success) {
      navigate("/login");
    }
    if (success) {
      navigate("/");
    }
  }

  return (
    <div className={style.loginBackground}>
      <div className={style.loginDiv}>
        <img src={logo} className={style.logo} alt="Logo fakestagram" />
        {/* <h1 className="title is-1"> Fakestagram </h1> */}

        <form className={style.formDiv}>
          <div className={style.loginLabel}>
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

          <div className={style.loginLabel}>
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type={show ? "text" : "password"}
                placeholder="********"
                id="passwordInput"
              />
              <span
                onClick={() => setShow(!show)}
                className={style.passwordEye}
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        </form>

        <button
          id={style.buttonSignIn}
          className="button is-danger"
          onClick={handleSubmit}
        >
          Sign in
        </button>
        <p className={style.orText}>or</p>
        <p className={style.text}>
          Create account <Link to="/register">here</Link>
        </p>
      </div>
    </div>
  );
}
