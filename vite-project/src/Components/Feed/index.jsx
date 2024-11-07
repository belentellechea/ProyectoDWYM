import React, { useEffect, useState } from "react";
import { Post } from "../Post";

export function Feed() {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
        const user = localStorage?.getItem("user");
        const userParsed = JSON.parse(user);
        const token = localStorage?.getItem("token");
        
        const response = await fetch("http://localhost:3001/api/posts/feed", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            setPosts(data);
            console.log('imprimiendo feed:' + posts);
        } else {
            console.error("Error al obtener los posts:", response.statusText);
        }
    } catch (error) {
        console.error("Error de red:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
}
