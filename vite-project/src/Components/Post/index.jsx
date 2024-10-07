import { PostBottom } from "../Post_Bottom";
import { PostCarousel } from "../Post_Carousel";
import { PostTop } from "../Post_Top";

export function Post() {
  return (
    <div className="postDiv">
      <PostTop></PostTop>
      <PostCarousel></PostCarousel>
      <PostBottom></PostBottom>
    </div>
  );
}
