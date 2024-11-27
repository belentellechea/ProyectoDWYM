import { useState } from "react";
import "./App.css";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { MyProfile } from "./Pages/Profiles/MyProfile";
import { FriendProfile } from "./Pages/Profiles/FriendProfile";
import { CreateAccount } from "./Pages/CreateAccount";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { UserProvider } from "./Context/UserContext.jsx";

function App() {

  // Managing open notifications
  const [notificationsModal, setNotificationsModal] = useState(false);

  function openNotifications() {
    setNotificationsModal(true);
  }

  const closeNotifications = () => {
    setNotificationsModal(false);
  };

  return (
    <AuthProvider>
      <UserProvider>
    
        <Router>
          <div className="app">
            <Routes>
              <Route path="/*" element={<Navigate replace to="/" />} />
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <Home
                    openNotifications={openNotifications}
                    closeNotifications={closeNotifications}
                    isNotificationsActive={notificationsModal}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <MyProfile
                    openNotifications={openNotifications}
                    closeNotifications={closeNotifications}
                    isNotificationsActive={notificationsModal}
                  />
                }
              />
              <Route path="/friendProfile/:id" element={<FriendProfile 
                       openNotifications={openNotifications} 
                        closeNotifications={closeNotifications} 
                        isNotificationsActive={notificationsModal}/>} />
              <Route path="/register" element={<CreateAccount />} />
            </Routes>
          </div>
        </Router>

      </UserProvider>
    </AuthProvider>
  );
}

export default App;
