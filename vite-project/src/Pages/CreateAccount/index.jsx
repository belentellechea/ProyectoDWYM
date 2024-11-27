import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";
import { postAccount } from "../../Services/authService";
import style from "./CreateAccount.module.css";


export function CreateAccount() {
  const { updateAuth } = useAuth();

  const navigate = useNavigate();

  function goToLogin() {
    navigate("/");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const account = {
      email: document.getElementById("emailInput").value,
      username: document.getElementById("usernameInput").value,
      password: document.getElementById("passwordInput").value,
    };

    const success = postAccount(account, updateAuth);
    if (success) navigate("/home");
  }

  return (
    <div className={style.registerBackground}>
      <div className={style.formBackground}>
        <h2 className={style.registerTitle}>Create account</h2>
        <form id={style.registerForm} onSubmit={handleSubmit}>
          <div className={style.inputDiv}>
            <div className={style.registerLabel}>
              <label className="label">
                <strong>Email</strong>
              </label>
              <div>
                <input className="input" type="email" id="emailInput" />
              </div>
            </div>

            <div className={style.registerLabel}>
              <label className="label">
                <strong>Username</strong>
              </label>
              <div>
                <input className="input" type="text" id="usernameInput" />
              </div>
            </div>

            <div className={style.registerLabel}>
              <label className="label">
                <strong>Password</strong>
              </label>
              <div>
                <input className="input" type="password" id="passwordInput" />
              </div>
            </div>
          </div>

          <div className={style.buttonDiv}>
            <button
              id={style.buttonCreateAccount}
              className="button is-danger"
              type="submit"
            >
              Create
            </button>
            <button
              id={style.buttonCancelAccount}
              className="button cancel-button"
              onClick={goToLogin}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
