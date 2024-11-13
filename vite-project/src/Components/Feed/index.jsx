import React, { useEffect, useState } from "react";
import { Post } from "../Post";
import { getFeed } from "../../Services/postService";
import { useAuth } from "../../Context/AuthContext";

export function Feed({ users }) {
  const { auth } = useAuth();
  
  const [feed, setFeed] = useState([]);

  const fetchFeed = async () => {
    try {
      const data = await getFeed(auth);
      setFeed(data);
      console.log("print feed: ", data);
    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };

  useEffect(() => {
    fetchFeed();
    console.log("print feed: ", feed);
  }, []);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  return (
    <div>
      <ul>
        {feed.length > 0 && (
          <div>
            {feed.map((post) => (
              <Post key={post._id} post={post} users={users}/>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}
