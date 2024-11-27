import React from "react";
import "./ProfilePreView.css";
import { Avatar } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import image from "../../assets/user.png";

export function ProfilePreView({ profile }) {

  const navigate = useNavigate();

  function viewProfile() {
    navigate(`/friendProfile/${profile._id}`);
  }

  return (
    <div className="box profileBox">
      <div className="deleteSuggestion">
        <div className="deleteButton">
          <CloseOutlined />
        </div>
      </div>
      <Avatar size={60} src={profile.profilePicture ? profile.profilePicture : image} />
      <p className="userName"> {profile.username} </p>
      <button className="button is-link button_viewProfile" onClick={viewProfile}> View </button>
    </div>
  );
}
