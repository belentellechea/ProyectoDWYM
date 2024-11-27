import React, { useEffect, useState } from "react";
import { Post } from "../Post";
import { getFeed } from "../../Services/postService";
import { useAuth } from "../../Context/AuthContext";
import style from "./Style.module.css";

export function Feed({ users }) {
  const { auth } = useAuth();

  const [feed, setFeed] = useState([]);

  const fetchFeed = async () => {
    try {
      const data = await getFeed(auth);
      setFeed(data);
    } catch (error) {
      console.error("Error fetching feed:", error);
    }
  };

  useEffect(() => {
    fetchFeed();
    console.log("print feed: ", feed);
  }, []);



  return (
    <div className={style.divFeed}>
      <ul className={style.feedItem}>
        {feed?.length > 0 && (
          <div className={style.feedItem}>
            {feed.map((post) => (
              <Post key={post._id} post={post} users={users} />
            ))}
          </div>
        )}
      </ul>
    </div>
  );
}
