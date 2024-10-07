import { Space } from "antd";
import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import "./PostBottom.css";

export function PostBottom() {
  return (
    <div className="divPostBottom">
      <div className="Iconos">
        <HeartOutlined />
        <CommentOutlined />
      </div>
      <div className="Likes">
        <p>
          <strong> 33 likes</strong>
        </p>
      </div>
      <div className="Comentarios">
        <p>Comentarios Comentarios Comentarios Comentarios....</p>
      </div>
    </div>
  );
}
