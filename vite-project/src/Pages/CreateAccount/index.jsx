import "./CreateAccount.css"
import { useNavigate } from "react-router-dom"

const url="http://localhost:3001/api/auth/register"

export function CreateAccount({setUser}) {

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

        postAccount(account); 
    }

    async function postAccount(account) {
        try {
            const response = ( url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(account)
            }); 

            if (response.status === 201) {
                const userData = await response.json(); 
                console.log("Cuenta creada exitosamente"); 
                setUser(userData); 

                if (userData.token) {
                    localStorage.setItem("token", userData.token);
                    navigate("/");
                } else {
                    console.log("Token no recibido");
                }
                
            } else if (response.status === 400) {
                console.log("El usuario ya existe"); 
                alert("El usuario ya existe"); 
            } else {
                console.log("Error al crear la cuenta"); 
            }

        } catch (error) {
            console.log("Error posting account: ", error); 
        }
    }

    return (
        <div className="registerBackground">
            <div className="formBackground is-mobile">
                <h2 className="title">Creación de cuenta</h2>
                <form id="registerForm" onSumbit={handleSubmit}>
                    <div className="box">
                        <label><strong>Correo electrónico</strong></label>
                        <br></br>
                        <input 
                            type="email"
                            id="emailInput"
                        />
                    </div>
                    
                    <div className="box">
                        <label><strong>Nombre de usuario</strong></label>
                        <br></br>
                        <input 
                            type="text"
                            id="usernameInput"
                        />
                    </div>
            
                    <div className="box">
                        <label><strong>Contraseña</strong></label>
                        <br></br>
                        <input 
                            type="password"
                            id="passwordInput"
                        />
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