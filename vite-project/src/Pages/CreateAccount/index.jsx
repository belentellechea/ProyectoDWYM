import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext.jsx";
import { postAccount } from "../../Services/authService";

const url="http://localhost:3001/api/auth/register";

export function CreateAccount() {
    const { auth, updateAuth} = useAuth();

    const navigate = useNavigate(); 

    function goToLogin() {
        navigate("/login"); 
    }

    function handleSubmit(event) {
        event.preventDefault(); 

        const account = {
            email: document.getElementById('emailInput').value,
            username: document.getElementById('usernameInput').value,
            password: document.getElementById('passwordInput').value, 
        }

        //postAccount(account, updateAuth);
        const success = postAccount(account, updateAuth);
        if (success) navigate("/");
    }

    return (
        <div className="registerBackground">
            <div className="formBackground is-mobile">
                <h2 className="title registerTitle">Creación de cuenta</h2>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="inputDiv">
                        <div className="field registerLabel">
                            <label className="label"><strong>Correo electrónico</strong></label>
                            <div>
                                <input 
                                    className="input"
                                    type="email"
                                    id="emailInput"
                                />
                            </div>
                        </div>
                        
                        <div className="field registerLabel">
                            <label className="label"><strong>Nombre de usuario</strong></label>
                            <div>
                                <input 
                                    className="input"
                                    type="text"
                                    id="usernameInput"
                                />
                            </div> 
                        </div>
                
                        <div className="field registerLabel">
                            <label className="label"><strong>Contraseña</strong></label>
                            <div>
                                <input
                                    className="input"
                                    type="password"
                                    id="passwordInput"
                                />
                            </div>
                        </div>
                    </div>
                    

                    <div className="buttonDiv">
                        <button className="button is-danger" type="submit">Crear</button>
                        <button className="button cancel-button" onClick={goToLogin}>Cancelar</button>
                    </div>
                
                </form>
            </div>
        </div>
    )
}