import { Space } from "antd";
import { CommentOutlined, HeartOutlined } from "@ant-design/icons";
import "./PostBottom.css";

export function PostBottom({ post }) {
  return (
    <div className="divPostBottom">
      <div className="Iconos">
        <HeartOutlined />
        <CommentOutlined />
      </div>
      <div className="Likes">
        <p>
          <strong> {post?.likes.length} likes</strong>
        </p>
      </div>
      <div className="Comentarios">
        <ul>
          {post?.comments?.map((comment) => (
            <span> <strong> {comment?.user?.username} </strong> {comment?.content} </span>
          ))}
        </ul>
      </div>
    </div>
  );
}
