//import { Image } from "antd";
import "./Login.css";
import logo from "../../assets/Logo.png";

export function Login() {
  return (
    <>
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
            />
          </div>
        </div>

        <div class="field">
          <label class="label loginLabel">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="********" />
          </div>
        </div>
      </div>

      <button class="button is-danger">Sign in</button>
      <p className="text">
        Create account <strong>here</strong>
      </p>
    </>
  );
}