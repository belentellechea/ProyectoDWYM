import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./ProfilePreView.css";
import { Avatar } from "antd";

export function ProfilePreView({ picture, userName }) {
  const header = (
    <div>
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
      <figure className="image is-32x32">
        <img className="is-rounded" src={picture} />
      </figure>

  return (
    <div className="box profileBox">
      <div className="deleteSuggestion">
        <p className="deleteButton"> x </p>
      </div>
      <Avatar size={60} src={picture} />
      <p className="userName"> {userName} </p>
      <button className="button is-link button_viewProfile"> View </button>
    </div>
  );
}
