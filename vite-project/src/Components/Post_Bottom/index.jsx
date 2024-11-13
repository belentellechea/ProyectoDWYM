import { theme } from "antd";
import {
  CommentOutlined,
  HeartFilled,
  HeartOutlined,
  RightOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./PostBottom.css";
import { likePost, postComment, unLike } from "../../Services/postService";
import { useUser } from "../../Context/UserContext";
import { useAuth } from "../../Context/AuthContext";

export function PostBottom({ post }) {
  const { updatePost } = useUser();
  const { auth } = useAuth();

  const doILikeThis = post.likes.includes(auth.id);
  const [heartIcon, setHeartIcon] = useState(doILikeThis);
  const [messageIcon, setMessageIcon] = useState(true);
  const [visible, setVisible] = useState("hidden");
  const [comment, setComment] = useState("");

  function likeUnLike() {
    if (heartIcon) {
      setHeartIcon(!heartIcon);
      unLike(post, auth, updatePost);
    } else {
      setHeartIcon(!heartIcon);
      likePost(post, auth, updatePost);
    }
  }

  // guardar post e

  function publishComment() {
    postComment(post, auth, comment, updatePost);
    setComment("");
  }

  return (
    <div className="divPostBottom">
      <div className="Iconos" style={{ fontSize: 30 }} theme={theme}>
        <div
          onClick={likeUnLike}
        >
          {!heartIcon ? (
            <HeartOutlined
              className="heartIcon"
              style={{ marginRight: 10, marginLeft: 10 }}
            />
          ) : (
            <HeartFilled
              style={{
                marginRight: 10,
                marginLeft: 10,
                color: "rgb(206, 68, 68)",
              }}
              className="heartIcon"
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
            maxHeight: visible === "visible" ? "300px" : "0px",
            transition: "0.8s",
            overflow: "hidden",
          }} // Ajusta el valor según la altura del contenido}}
          // style={{
          //   maxHeight: visible === "visible" ? "200px" : "0px", // Ajusta el valor según la altura del contenido
          //   transition: "0.5s",
          // }}
        >
          <div
            className="listaComentarios"
            style={{
              overflowY: visible === "visible" ? "scroll" : "hidden",
              maxHeight: "100px",
              padding: "5px",
            }}
          >
            {post?.comments?.map((comment) => (
              <Comment comment={comment} />
            ))}
            <p>
              <strong> user_name </strong> hola{" "}
            </p>
            <p>
              <strong> user_name </strong> hola{" "}
            </p>
            <p>
              <strong> user_name </strong> hola{" "}
            </p>
            <p>
              <strong> user_name </strong> hola{" "}
            </p>
            <p>
              <strong> user_name </strong> hola{" "}
            </p>
            <p>
              <strong> user_name </strong> hola{" "}
            </p>
          </div>
          <form className="commentSend">
            <input
              className="commentInput"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></input>
            <RightOutlined className="sendButton" onClick={publishComment}/>
          </form>
        </div>
      </div>
    </div>
  );
}
