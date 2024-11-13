import { useState, useEffect, createContext } from "react";
import "./App.css";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { MyProfile } from "./Pages/Profiles/MyProfile";
import { FriendProfile } from "./Pages/Profiles/FriendProfile";
import { CreateAccount } from "./Pages/CreateAccount";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from './Context/AuthContext.jsx';
import { UserProvider } from "./Context/UserContext.jsx";



function App() {
  // Managing data
  // const [user, setUser] = useState(() => {localStorage.getItem('user');});
  // const [userPosts, setUserPosts] = useState([]);
  
  // Managing open notifications
  const [notificationsModal, setNotificationsModal] = useState(false);

  function openNotifications() {
    setNotificationsModal(true);
  }

  const closeNotifications = () => {
    setNotificationsModal(false);
  };

  // Actualiza el localStorage si el usuario está presente, cada vez que hay un cambio en este.
  // useEffect(() => {
  //   if (user) {
  //     localStorage.setItem('user', JSON.stringify(user));
  //   }
  // }, [user]);

  // Fetches user and userPosts data
  // async function getUserData(id,token) {
  //   try {
  //     const response = await fetch(`http://localhost:3001/api/user/profile/${id}`, {
  //       method: "GET",
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     const data = await response.json();

  //     if (!response.ok) throw new Error("Error en la respuesta");

  //     // Updates user and userPosts data.
  //     setUserPosts(data?.posts);
      
  //     if (data.user) {
  //       setUser(data.user);
  //       localStorage.setItem('user', JSON.stringify(data.user)); // Actualiza el localStorage
  //     } else {
  //       console.log("No se encontró el usuario en los datos recibidos.");
  //     }
  //   } catch (error) {
  //     console.log("Error fetching data: ", error);
  //   }
  // }

  return (
    <AuthProvider>
      <UserProvider>

        <Router> 
          <div className="app">
          <Routes>
            <Route path="/*" element={<Navigate replace to="/"/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal} />} />
            {/* <Route path="/notifications" element={<NotificationsPage />} /> */}
            <Route path="/profile" element={<MyProfile openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal} />} />
            <Route path="/friendProfile/:id" element={<FriendProfile openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal}/>} />
            <Route path="/register" element={ <CreateAccount /> }/>
          </Routes>
          </div>
        </Router>

      </UserProvider>
    </AuthProvider>
  );
}

export default App;
