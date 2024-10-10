import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import "./PostTop.css";

export function PostTop() {
  return (
    <div className="divPostTop flex-container">
      <div className="avatarYNombre">
        <Avatar size="small" className="avatarIcon" icon={<UserOutlined />} />
        <p className="title is-6"> Profile Name </p>
      </div>
      <MoreOutlined />
    </div>
  );
}
