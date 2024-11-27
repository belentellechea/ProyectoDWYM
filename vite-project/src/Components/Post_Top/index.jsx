import { Avatar } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import "./PostTop.css";
import image from "../../assets/user.png";

export function PostTop({ user }) {
  return (
    <div className="divPostTop flex-container" >
      <div className="avatarYNombre">
        
        <Avatar
          size={40}
          className="avatarIcon"
          src={user.profilePicture ? user.profilePicture : image}
        />

        <p className="title is-6">
          {" "}
          {user?.username ? user.username : "Profile Name"}{" "}
        </p>
      </div>
      <MoreOutlined id="moreOutlined" style={{ fontSize: 25 }} />
    </div>
  );
}
