import { Space, theme } from "antd";
import { CommentOutlined, HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./PostBottom.css";

export function PostBottom({ post }) {
  const [heartIcon, setHeartIcon] = useState(true);
  const [messageIcon, setMessageIcon] = useState(true);

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
          <CommentOutlined className="comentario" />
        </div>
      </div>
      <div className="Likes">
        <p>
          <strong> {post?.likes.length} likes</strong>
        </p>
      </div>
      <div className="Comentarios">
        <ul className="listaComentarios">
          {post?.comments?.map((comment) => (
            <span>
              {" "}
              <strong> {comment?.user?.username} </strong> {comment?.content}{" "}
            </span>
          ))}
        </ul>
      </div>
    </div>
  );
}
