import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../../Components/SiderContent";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const { Sider, Content } = Layout;

const url= `http://localhost:3001/api/user/profile`;

export function FriendProfile({friends}) {
  const { id } = useParams(); 
  const [ profile, setProfile ] = useState(null); 
  const [friendButton, setfriendButton] = useState(" ")

  async function fetchProfileDetails() {
    try {
      const response = await fetch(`${url}/${id}`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await response.json();
      console.log(data)
      setProfile(data);

      const isFriend = friends.some(friend => friend._id == data.user._id);
      setfriendButton (isFriend ? "Delete friend" : "Add friend")

    } catch (error) {
      console.log("Error fetching profile details:", error);
    } 
  }

  useEffect(() => {
    fetchProfileDetails();
  }, [id]);

  return (
    <>
    {
      profile && (
        <Layout className="layout">
        <Sider className="sider" width="20%">
          <SiderContent></SiderContent>
        </Sider>
        <Content className="content">
          <div className="profileInfo">
            <div className="leftInfo">
              <ProfilePhoto size={160} url={profile.user.profileImage} />
            </div>
            <div className="rightInfo">
              <div className="userEdit">
                <h4 className="subtitle is-4">
                  <strong>{profile.user.username}</strong>
                </h4>
                <button className="button editProfile">{friendButton}</button>
              </div>
              <div className="postsFriends">
                <p>
                  <strong>{profile.posts?.length || 0}</strong> posts
                </p>
                <p>
                  <strong>{profile.user.friends?.length || 0}</strong> friends
                </p>
              </div>
            </div>
          </div>
          <div className="photos">
            <Grid photos={profile.posts} />
          </div>
        </Content>
      </Layout>
      )
    }
    </>
  );
}
