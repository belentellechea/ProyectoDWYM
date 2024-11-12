import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./ProfilePreView.css";
import { Avatar } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export function ProfilePreView({ picture, userName }) {
  return (
    <div className="box profileBox">
      <div className="deleteSuggestion">
        <div className="deleteButton">
          <CloseOutlined />
        </div>
      </div>
      <Avatar size={60} src={picture} />
      <p className="userName"> {userName} </p>
      <button className="button is-link button_viewProfile"> View </button>
    </div>
  );
}
