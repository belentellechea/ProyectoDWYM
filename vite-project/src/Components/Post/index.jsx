import { PostBottom } from "../Post_Bottom";
import { PostCarousel } from "../Post_Carousel";
import { PostTop } from "../Post_Top";
import "./Post.css";

export function Post({ post }) {
  return (
    <div className="postDiv">
      <PostTop user={post?.user}></PostTop>
      <PostCarousel></PostCarousel>
      <PostBottom post={post}></PostBottom>
    </div>
  );
}
