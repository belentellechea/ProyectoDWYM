import { useAuth } from "../../Context/AuthContext";
import { useUser } from "../../Context/UserContext";
import { getUser } from "../../Services/userService";
import { PostBottom } from "../Post_Bottom";
import { PostCarousel } from "../Post_Carousel";
import { PostTop } from "../Post_Top";
import "./Post.css";
import { useState, useEffect } from "react";

export function Post({ post, users }) {
  const { auth } = useAuth();
  const { user } = useUser();
  // const [user, setUser] = useState(null);

  // const fetchUser = async () => {
  //   const fetchedUser = await getUser(post.user, auth.token);
  //   setUser(fetchedUser);
  // };

  // useEffect(() => {
  //   fetchUser();
  // }, []);
  console.log("post comments: ", post.comments);

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
