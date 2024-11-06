import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../../Components/SiderContent";
import "./style.css";
import image from "../../../assets/user.png";
import { NotificationsModal } from "../../../Components/NotificationsModal";
import { useState, useEffect } from "react";
// import { EditModal } from "../../../Components/EditModal"

const { Sider, Content } = Layout;

export function MyProfile({ userI, posts, setUser, openNotifications, closeNotifications, isNotificationsActive }) {

  const userLocalStorage = localStorage.getItem('user');
  const [user, setUserData] = useState(JSON.parse(userLocalStorage));
  //const [posts, setPosts] = useState([]); 
  const [visible, setVisible] = useState("none"); 
  const [isLoading, setIsLoading] = useState(true); 
  const token = localStorage.getItem('token'); 

  async function getUserData(id,token) {
    try {
      const response = await fetch(`http://localhost:3001/api/user/profile/${user._id}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (!response.ok) throw new Error("Error en la respuesta");

      // Updates user and userPosts data.
      //setUserPosts(data?.posts);
      
      if (data.user) {
        console.log(data);
        //setUserData(data.user);
        localStorage.setItem('user', JSON.stringify(data.user)); // Actualiza el localStorage
      } else {
        console.log("No se encontró el usuario en los datos recibidos.");
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  useEffect(() => {
    if (user && token) {
      setIsLoading(false);
      console.log(user);
      getUserData(user._id, token);
      // comenté esto, porque el método useEffect if(user) en app ya se encarga de actualizar el localStorage bajo cambios en el user.
      
      // getData(user._id, token)
      //   .then((data) => {
      //     if (data) {
      //       setUserData(data);
      //       localStorage.setItem('user', JSON.stringify(data)); // Guarda los datos en localStorage
      //     }
      //     setIsLoading(false);
      //   })
      //   .catch((error) => {
      //     console.log("Error fetching user data:", error);
      //     setIsLoading(false);
      //   });
    }
  }, [user, token]);

  // async function getPosts() {
  //   try {
  //     const response = await fetch(`http://localhost:3001/api/posts/feed`, {
  //       method: "GET",
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     });
  //     const data = await response.json(); 
  //     console.log(data.posts); 
  //     setPosts(data.posts); 
  //   } catch (error) {
  //     console.log("Error fetching data: ", error);
  //   }
  // }
  
  // useEffect(() => {
  //   if (user && token) {  
  //     getPosts();
  //   } 
  // }, [user]); 

  function openModal() {
    setVisible("block");
  }


  return (
    <>
    { !isLoading ? (
      <Layout className="layout">
        <Sider className="sider" width="20%">
          <SiderContent
            openNotifications={openNotifications}
            closeNotifications={closeNotifications}
          ></SiderContent>
        </Sider>

        <Content className="content" onClick={closeNotifications}>
          <div className="profileInfo">
            <div className="leftInfo">
              <ProfilePhoto size={160} url={user?.profilePicture ? user.profilePicture : image} />
            </div>
            <div className="rightInfo">
              <div className="userEdit">
                <h4 className="subtitle is-4">
                  <strong>{user?.username}</strong>
                </h4>
                <button className="button editProfile" onClick={openModal}>edit profile</button>
              </div>
              <div className="postsFriends">
                <p>
                  <strong>{posts?.length}</strong> posts
                </p>
                <p>
                  <strong>{user?.friends?.length || 0}</strong> friends
                </p>
              </div>
            </div>
          </div>
          <div className="photos">
            <Grid photos={posts} />
          </div>
          <NotificationsModal isActive={isNotificationsActive} />
        </Content>

        <EditModal
          visible={visible}
          setVisible={setVisible}
          userData={user}
        />
      </Layout>)
     :  (<p>Loading...</p>)} 
    </>
  );
}
