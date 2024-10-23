import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./ProfilePreView.css";
import { Avatar } from "antd";

export function ProfilePreView({ picture, userName }) {
  const header = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem",
      }}
    >
      <figure className="image is-32x32">
        <img className="is-rounded" src={picture} />
      </figure>

      <button
        className="delete is-small"
        style={{ position: "absolute", top: "10px", right: "10px" }}
      ></button>
    </div>
  );

  return (
    // <div className="profile-card" style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
    //     <Card header={header}>
    //         <span> {userName} </span>
    //         <Button label="View" className="p-button-rounded p-button-info"/>
    //      </Card>
    // </div>
    // <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
    //     <Card style={{ width: '200px', textAlign: 'center' }} header={header}>
    //         <div style={{ marginBottom: '1rem' }}>
    //             {userName}
    //         </div>
    //         <Button label="View" className="p-button-rounded p-button-info custom-button" />
    //     </Card>
    // </div>
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
