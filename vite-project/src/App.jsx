import { useState } from "react";
import "./App.css";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { MyProfile } from "./Pages/MyProfile";
// import { FriendProfile } from "./Pages/FriendProfile"
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

  return (
    <>
      <Router> 
        <div className="app">
        <Routes>
          <Route path="/*" element={<Navigate replace to="/"/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal} />} />
          {/* <Route path="/notifications" element={<NotificationsPage />} /> */}
          <Route path="/profile" element={<MyProfile openNotifications={openNotifications} closeNotifications={closeNotifications} isNotificationsActive={notificationsModal} />} />
          {/* <Route path="/friendProfile/:id" element={<FriendProfile />} /> */}
        </Routes>
        </div>
      </Router>
      {/* <Post></Post> */}
    </>
  );
}

export default App;
