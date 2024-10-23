import { useState } from "react";
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

  // Managing open notifications
  const [notificationsModal, setNotificationsModal] = useState(false);

  function openNotifications() {
    setNotificationsModal(true);
  }

  const closeNotifications = () => {
    setNotificationsModal(false);
  }

  const [user, setUser] = useState(null); 


  return (
    <>
      <Router> 
        <div className="app">
        <Routes>
          <Route path="/*" element={<Navigate replace to="/"/>} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/" element={<Home openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal} />} />
          {/* <Route path="/notifications" element={<NotificationsPage />} /> */}
          <Route path="/profile" element={<MyProfile openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal} />} />
          {/* <Route path="/friendProfile/:id" element={<FriendProfile />} /> */}
          <Route path="/register" element={ <CreateAccount setUser={setUser}/> }/>
        </Routes>
        </div>
      </Router>
      {/* <Post></Post> */}
    </>
  );
}

export default App;
