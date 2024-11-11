import { theme } from "antd";
import { CommentOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./PostBottom.css";

export function PostBottom({ post }) {
  const [heartIcon, setHeartIcon] = useState(true);
  const [messageIcon, setMessageIcon] = useState(true);
  const [visible, setVisible] = useState("hidden");

  return (
    <div className="divPostBottom">
      <div className="Iconos" style={{ fontSize: 30 }} theme={theme}>
        <div
          onClick={() => {
            setHeartIcon(!heartIcon);
          }}
        >
          {heartIcon ? (
            <HeartOutlined style={{ marginRight: 10, marginLeft: 10 }} />
          ) : (
            <HeartFilled
              style={{
                marginRight: 10,
                marginLeft: 10,
                color: "rgb(67, 127, 223)",
              }}
              className="heartFilled"
            />
          )}
        </div>
        <div>
          <CommentOutlined
            className="comentario"
            onClick={() => {
              if (visible == "visible") {
                setVisible("hidden");
              } else {
                setVisible("visible");
              }
            }}
          />
        </div>
      </div>
      <div className="Likes">
        <p>
          <strong> {post?.likes.length} likes</strong>
        </p>
      </div>
      <div
        className="Comentarios"
        style={{
          visibility: visible,
          transition: 0,
        }}
      >
        <div
          className="ComentariosContent"
          style={{
            maxHeight: visible === "visible" ? "200px" : "0px",
            transition: "0.5s",
          }} // Ajusta el valor según la altura del contenido}}
          // style={{
          //   maxHeight: visible === "visible" ? "200px" : "0px", // Ajusta el valor según la altura del contenido
          //   transition: "0.5s",
          // }}
        >
          <div className="listaComentarios">
            {/* {post?.comments?.map((comment) => (
              <span>
                {" "}
                <strong> {comment?.user?.username} </strong> {comment?.content}{" "}
              </span>
            ))} */}
            <p> hola </p>
            <p> hola </p>
            <p> hola </p>
            <p> hola </p>
            <p> hola </p>
            <p> hola </p>
          </div>
          <form>
            <input
              className="commentInput"
              type="text"
              placeholder="Add a comment..."
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
