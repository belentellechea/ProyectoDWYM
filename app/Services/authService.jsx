const url = "http://172.20.10.7:3001";

export const postAccount = async (account, updateAuth) => {
    
    try {
        const response = await fetch( url+"/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(account)
        }); 

        if (response.status === 201) {
            const userData = await response.json(); 
            console.log("Cuenta creada exitosamente"); 
            console.log(userData);

            const newAuth = {
                token: userData.token,
                id: userData._id
            }
            updateAuth(newAuth);
            return true;
            
        } else if (response.status === 400) {
            console.log("El usuario ya existe"); 
            alert("El usuario ya existe"); 
            return false;
        } else {
            console.log("Error al crear la cuenta"); 
            return false;
        }

    } catch (error) {
        console.log("Error posting account: ", error); 
        return false;
    }
}

export const loginAccount = async (account, updateAuth) => {
    try {
      const response = await fetch( url+"/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(account),
      });

      if (response.status === 200) {
        const userData = await response.json();

        const newAuth = {
            token: userData.token,
            id: userData._id
        }
        console.log("userData login response: ", userData);
        updateAuth(newAuth);

        return true;

      } else if (response.status === 401) {
        alert("Credenciales incorrectas"); 
        return false;
      } else {
        console.log("Error al inciar sesión"); 
        return false;
      }
    } catch (error) {
      console.log("Error del servidor", error);
      return false;
    }
  };
