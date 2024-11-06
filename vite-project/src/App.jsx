import { useState, useEffect } from "react";
import "./App.css";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { MyProfile } from "./Pages/Profiles/MyProfile";
// import { FriendProfile } from "./Pages/FriendProfile"
import { CreateAccount } from "./Pages/CreateAccount";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Post } from "./Components/Post";
//import { NotificationsPage } from "./Pages/NotificationsPage";

function App() {
  const [user, setUser] = useState(() => {localStorage.getItem('user');});
  // Managing open notifications
  const [notificationsModal, setNotificationsModal] = useState(false);

  function openNotifications() {
    setNotificationsModal(true);
  }

  const closeNotifications = () => {
    setNotificationsModal(false);
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user)); // Actualiza el localStorage si el usuario está presente
    }
  }, [user]);

  async function getUserData(id,token) {
    try {
      const response = await fetch(`http://localhost:3001/api/user/profile/${id}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) throw new Error("Error en la respuesta");
  
      const data = await response.json();
      
      if (data.user) {
        setUser(data.user);
        localStorage.setItem('user', JSON.stringify(data.user)); // Actualiza el localStorage
      } else {
        console.log("No se encontró el usuario en los datos recibidos.");
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  return (
    <>
      <Router> 
        <div className="app">
        <Routes>
          <Route path="/*" element={<Navigate replace to="/"/>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/" element={<Home openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal} />} />
          {/* <Route path="/notifications" element={<NotificationsPage />} /> */}
          <Route path="/profile" element={<MyProfile user={user} getData={getUserData} openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal} />} />
          {/* <Route path="/friendProfile/:id" element={<FriendProfile />} /> */}
          <Route path="/register" element={ <CreateAccount setUser={setUser}/> }/>
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
