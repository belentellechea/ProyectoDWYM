import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";
import { postAccount } from "../../Services/authService";
import style from "./CreateAccount.module.css";

const url = "http://localhost:3001/api/auth/register";

export function CreateAccount() {
  const { auth, updateAuth } = useAuth();

  const navigate = useNavigate();

  function goToLogin() {
    navigate("/login");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const account = {
      email: document.getElementById("emailInput").value,
      username: document.getElementById("usernameInput").value,
      password: document.getElementById("passwordInput").value,
    };

    //postAccount(account, updateAuth);
    const success = postAccount(account, updateAuth);
    if (success) navigate("/");
  }

  return (
    <div className={style.registerBackground}>
      <div className={style.formBackground}>
        <h2 className={style.registerTitle}>Creación de cuenta</h2>
        <form id={style.registerForm} onSubmit={handleSubmit}>
          <div className={style.inputDiv}>
            <div className={style.registerLabel}>
              <label className="label">
                <strong>Correo electrónico</strong>
              </label>
              <div>
                <input className="input" type="email" id="emailInput" />
              </div>
            </div>

            <div className={style.registerLabel}>
              <label className="label">
                <strong>Nombre de usuario</strong>
              </label>
              <div>
                <input className="input" type="text" id="usernameInput" />
              </div>
            </div>

            <div className={style.registerLabel}>
              <label className="label">
                <strong>Contraseña</strong>
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
              Crear
            </button>
            <button
              id={style.buttonCancelAccount}
              className="button cancel-button"
              onClick={goToLogin}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
