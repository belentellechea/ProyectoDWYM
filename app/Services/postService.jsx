const url = "http://172.20.10.7:3001";

export const uploadPost = async (imageUrl, caption, addPost, auth) => {

    console.log("image:", imageUrl);
    console.log("caption:", caption);
    const formData = new FormData();
    //formData.append("image", imageUrl);
    formData.append("image", {
        uri: imageUrl,
        name: 'photo.jpg', // Nombre que quieres darle
        type: 'image/jpeg', // Tipo MIME
    });
    formData.append("caption", caption);

    console.log("formData:", formData);

    try {
        const response = await fetch( url+`/api/posts/upload`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
            body: formData
        });
        const data = await response.json();
        console.log("data respuesta post");
        console.log(data);

        //verificar que data devuelva el post!!!
        addPost(data);

    } catch (error) {
        console.log("Error posting data: ", error);
    }
}

export const getFeed = async (auth) => {
    try {
        const response = await fetch( url+`/api/posts/feed`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
        });

        const data = await response.json();
        console.log("data response getFeed: ", data);
        if (!response.ok) throw new Error("Error en la respuesta");
        
        return data;
    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const likePost = async (post, auth, updatePost) => {
    try {
        const response = await fetch( url+`/api/posts//${post._id}/like`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
            body: {
                "postId": post._id
            }
        });

        const data = await response.json();

        console.log("data response likePost: ", data);
        if (!response.ok) throw new Error("Error en la respuesta");
        updatePost(post, data);
        
    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const unLike = async (post, auth, updatePost) => {
    try {
        const response = await fetch( url+`/api/posts/${post._id}/like`, {
            method: "DELETE",
            headers: {
                'Authorization': `Bearer ${auth.token}`
            },
            body: {
                "postId": post._id
            }
        });

        const data = await response.json();

        console.log("data response unLikePost: ", data);
        if (!response.ok) throw new Error("Error en la respuesta");
        updatePost(post, data);
        
    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const postComment = async (post, auth, content, updatePost) => {
    try {
        const response = await fetch( url+`/api/posts/${post._id}/comments`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${auth.token}`
            },
            body: JSON.stringify({content}),
        });

        const data =  await response.json();
        console.log("data post comment: ", data);

        if (!response.ok) throw new Error("Error en la respuesta");
        updatePost(post, data);

        console.log("data post comment 2: ", data);

        return data;

    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const deleteComment = async (post, comment, updatePost, auth) => {
    try {
        const response = await fetch( url+`/api/posts/${post._id}/comments/${comment._id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${auth.token}`
            },
        });

        const data =  await response.json();

        if (!response.ok) throw new Error("Error en la respuesta");
        updatePost(post, data);

    } catch (error) {
        console.log("Error fetching posts: ", error);
    }
}

export const getSpecificComment = async (comment, auth) => {
    try {
        const response = await fetch( url+`/api/posts/comments/${comment._id}`, {
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
