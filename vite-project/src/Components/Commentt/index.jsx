import React, { useEffect, useState } from "react";
import { getSpecificComment } from "../../Services/postService";
import { useAuth } from "../../Context/AuthContext";

export function Commentt({ comment }) {
    const { auth } = useAuth();

    const [comm, setComm] = useState({});

    const fetchComment = async () => {
        const commentt = await getSpecificComment(comment, auth);
        setComm(commentt);
    }

    useEffect(() => {
        fetchComment();
    }, []);


    return (
        <p> <strong>{comm?.user?.username}</strong>{"   "}{comm?.content}</p>
    );
}