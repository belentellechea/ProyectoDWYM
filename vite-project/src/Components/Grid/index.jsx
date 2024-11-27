import { useEffect, useState } from "react";
import { PostModal } from "../PostModal";
import style from "./Style.module.css";

export function Grid({ posts }) {
  const [isPostModalActive, setIsPostModalActive] = useState(false);
  const [currentPostId, setCurrentPostId] = useState("");
  const [post, setPost] = useState();

  useEffect(() => {
    console.log("posts que recibe grid: ", posts);
  }, []);


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
                console.log("post para postModal: ", post);
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
