import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import "./PostTop.css";

export function PostTop({ user }) {
  return (
    <div className="divPostTop flex-container">
      <div className="avatarYNombre">
        {/* <Avatar size="small" className="avatarIcon" icon={<UserOutlined />} /> */}
        <Avatar
          size={40}
          className="avatarIcon"
          icon={user?.profilePicture ? user?.profilePicture : <UserOutlined />}
        />
        {/* <p className="title is-6"> Profile Name </p> */}
        <p className="title is-6">
          {" "}
          {user?.username ? user.username : "Profile Name"}{" "}
        </p>
      </div>
      <MoreOutlined id="moreOutlined" style={{ fontSize: 25 }} />
    </div>
  );
}
