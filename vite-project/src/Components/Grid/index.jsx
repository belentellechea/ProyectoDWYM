import { useEffect, useState } from "react";
import { PostModal } from "../PostModal";
import style from "./Style.module.css";
import { useUser } from "../../Context/UserContext";

export function Grid({ posts }) {
  const [isPostModalActive, setIsPostModalActive] = useState(false);
  const [currentPostId, setCurrentPostId] = useState("");
  const [post, setPost] = useState();

  useEffect(() => {
    console.log("posts que recibe grid: ", posts);
  }, []);

  const { user } = useUser();

  return (
    <div className={style.photoGrid}>
      {posts?.length > 0 ? (
        posts?.map((post, index) => (
          <>
            <img
              className={style.photo}
              key={index}
              src={`http://localhost:3001/${post.imageUrl}`}
              onClick={() => {
                setCurrentPostId(post._id);
                setIsPostModalActive(true);
                setPost(post);
              }}
            />
          </>
        ))
      ) : (
        <div className={style.noPhotos}>No posts yet</div>
      )}
      {isPostModalActive && (
        <PostModal
          post={post}
          setIsPostModalActive={setIsPostModalActive}
          currentPost={currentPostId}
        />
      )}
    </div>
  );
}
