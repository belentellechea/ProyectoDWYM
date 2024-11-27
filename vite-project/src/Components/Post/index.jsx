import { PostBottom } from "../Post_Bottom";
import { PostTop } from "../Post_Top";
import "./Post.css";

export function Post({ post, users }) {

  const profile = users.find((profile) => profile._id == post.user._id);


  return (
    <div className="postDiv">
      <PostTop user={profile}></PostTop>
      <img
        src={`http://localhost:3001/${post.imageUrl}`}
        style={{ width: "100%" }}
      />
      <PostBottom post={post}></PostBottom>
    </div>
  );
}
