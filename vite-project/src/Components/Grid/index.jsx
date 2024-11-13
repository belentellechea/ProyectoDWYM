import { useState } from "react";
import { PostModal } from "../PostModal";
import "./style.css";

export function Grid({ posts }) {
  const [isPostModalActive, setIsPostModalActive] = useState(false);
  const [currentPostId, setCurrentPostId] = useState("");

  return (
    <div className="photoGrid" >
      {posts?.length > 0 ? (
        posts?.map((post, index) => (
          <>
            <img className="photo" key={index} src={`http://localhost:3001/${post.imageUrl}`} onClick={() => {setCurrentPostId(post._id); setIsPostModalActive(true)}} />
            <PostModal post={post} isActive={isPostModalActive} currentPost={currentPostId} closeModal={() => setIsPostModalActive(false)} />
          </>
        ))
      ) : (
        <div className="noPhotos">No posts yet</div>
      )}
    </div>
  );
}