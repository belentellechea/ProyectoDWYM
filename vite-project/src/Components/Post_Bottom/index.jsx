import { theme } from "antd";
import { CommentOutlined, HeartFilled, HeartOutlined, RightOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./PostBottom.css";
import { likePost, postComment, unLike } from "../../Services/postService";
import { useUser } from "../../Context/UserContext";
import { useAuth } from "../../Context/AuthContext";
import { Commentt } from "../Commentt";

export function PostBottom({ post }) {
  const { updatePost } = useUser();
  const { auth } = useAuth();

  const doILikeThis = post.likes.includes(auth.id);
  const [heartIcon, setHeartIcon] = useState(doILikeThis);
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [visible, setVisible] = useState("hidden");
  const [comment, setComment] = useState("");

  function likeUnLike() {
    if (heartIcon) {
      setHeartIcon(!heartIcon);
      setLikes((prev) => prev.filter((id) => id !== auth.id));
      unLike(post, auth, updatePost);
    } else {
      setHeartIcon(!heartIcon);
      setLikes((prev) => [...prev, auth.id]);
      likePost(post, auth, updatePost);
    }
  }

  async function publishComment() {
    const newComment = await postComment(post, auth, comment, updatePost);
    setComments((prev) => [...prev, newComment]);
    setComment("");
  }

  useEffect(() => {
    setHeartIcon(doILikeThis);
    setLikes(post.likes);
    setComments(post.comments);
  }, [post]);

  useEffect(() => {}, [post?.likes]);

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
          <strong> {likes.length} likes</strong>
        </p>
      </div>

      <span> { post.caption} </span>

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
        >
          <div
            className="listaComentarios"
            style={{
              overflowY: visible === "visible" ? "scroll" : "hidden",
              maxHeight: "100px",
              padding: "5px",
            }}
          >
            {comments.map((comment) => (
              <Commentt comment={comment._id} post={post} setComments={setComments}/>
            ))}
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
