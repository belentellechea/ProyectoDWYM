
export const uploadPost = async (imageUrl, caption, addPost, auth) => {
    try {
        const response = await fetch(`http://localhost:3001/api/posts/upload`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${auth.token}`
              },
            body: {
                "imageUrl": imageUrl,
                "caption": caption,
            }
        });
        const data = await response.json();

        //verificar que data devuelva el post!!!
        addPost(data);

    } catch (error) {
        console.log("Error posting data: ", error);
    }
}

export const getFeed = async () => {
    try {
        const response = await fetch(`http://localhost:3001/api/posts/feed`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
        });

        const data = await response.json();

        if (!response.ok) throw new Error("Error en la respuesta");
        
        return data;
    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const likeHandler = async (post, updatePost) => {
    try {
        const response = await fetch(`http://localhost:3001/api/posts/feed`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
            body: {
                "postId": post._id
            }
        });

        const data = await response.json();

        if (!response.ok) throw new Error("Error en la respuesta");
        updatePost(post, data);
        
    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const postComment = async (post, content, updatePost) => {
    try {
        const response = await fetch(`http://localhost:3001/api/posts/${post._id}/comments`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
            body: {
                "content": content
            }
        });

        const data =  await response.json();

        if (!response.ok) throw new Error("Error en la respuesta");
        updatePost(post, data);

    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const deleteComment = async (post, comment, updatePost) => {
    try {
        const response = await fetch(`http://localhost:3001/api/posts/${post._id}/comments/${comment._id}`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
            body: {
                "content": content
            }
        });

        const data =  await response.json();

        if (!response.ok) throw new Error("Error en la respuesta");
        updatePost(post, data);

    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const getSpecificComment = async (comment) => {
    try {
        const response = await fetch(`http://localhost:3001/api/posts/comments/${comment._id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
        });

        const data =  await response.json();

        if (!response.ok) throw new Error("Error en la respuesta");
        
        return data;

    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}
