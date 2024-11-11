import { PostBottom } from "../Post_Bottom";
import { PostCarousel } from "../Post_Carousel";
import { PostTop } from "../Post_Top";
import "./Post.css";

export function Post({ post, image }) {
  return (
    <div className="postDiv">
      <PostTop user={post?.user ? post.user : "other_user"}></PostTop>
      <img
        src={
          image
            ? image
            : "https://i.pinimg.com/564x/f3/b4/db/f3b4db6001af9e08c11a91a60316bf2a.jpg"
        }
        style={{ width: "100%" }}
      />
      <PostBottom post={post}></PostBottom>
    </div>
  );
}
