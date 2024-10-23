import { ProfilePhoto } from "../../../Components/ProfilePhoto";
import { Grid } from "../../../Components/Grid";
import { Layout } from "antd";
import { SiderContent } from "../../../Components/SiderContent";
import "../style.css";
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const { Sider, Content } = Layout;

const url= `http://localhost:3000/profile`;

export function FriendProfile() {
  const { user } = useParams(); 
  const [ profile, setProfile ] = useState(null); 

  const navigate = useNavigate(); 

  useEffect(() => {
    async function fetchProfileDetails() {
    try {
        const response = await axios.get(`${url}/${user}`);
        setProfile(response.data); 
    } catch (error) {
        console.error("Error fetching profile details:", error);
    } 
    } fetchProfileDetails();
  }, [user]);

  return (
    <>
      <Layout className="layout">
        <Sider className="sider" width="20%">
          <SiderContent></SiderContent>
        </Sider>
        <Content className="content">
          <div className="profileInfo">
            <div className="leftInfo">
              <ProfilePhoto size={160} url={profile.profilePicture} />
            </div>
            <div className="rightInfo">
              <div className="userEdit">
                <h4 className="subtitle is-4">
                  <strong>{profile.username}</strong>
                </h4>
                <button className="button editProfile">add friend</button>
              </div>
              <div className="postsFriends">
                <p>
                  <strong>11</strong> posts
                </p>
                <p>
                  <strong>17</strong> friends
                </p>
              </div>
              <div className="description">
                <p>
                  <strong>name - surname</strong>
                </p>
                <p>profile description</p>
              </div>
            </div>
          </div>
          <div className="photos">
            <Grid photos={[]} />
          </div>
        </Content>
      </Layout>
    </>
  );
}
