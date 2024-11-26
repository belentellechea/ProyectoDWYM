import React, { useEffect, useState } from "react";
import { deleteComment, getSpecificComment } from "../../Services/postService";
import { useAuth } from "../../Context/AuthContext";
import { DeleteOutlined } from "@ant-design/icons";
import { useUser } from "../../Context/UserContext";
import styles from "./Commentt.module.css";

export function Commentt({ comment, post, setComments }) {
    const { auth } = useAuth();
    const { updatePost } = useUser();

    const [comm, setComm] = useState({});

    const fetchComment = async () => {
        const commentt = await getSpecificComment(comment, auth);
        setComm(commentt);
        console.log("COMM ",comm);
    }

    useEffect(() => {
        console.log("auth en comment: ", auth);
        console.log("comment in commentt: ", comment);
        fetchComment();
    }, []);

    function deleteCommentHandler() {
        deleteComment(post, comm, updatePost, auth);
        setComments((prev) => prev.filter((item) => item != comm._id));
    }


    return (
        <p className={styles.comment}>
            <strong className={styles.username}>@{comm?.user?.username}</strong>
            <span className={styles.content}>{comm?.content}</span>
            <DeleteOutlined
                className={styles.deleteIcon}
                // onClick={() => deleteComment(post, comm, updatePost, auth)}
                onClick={deleteCommentHandler}
            />
        </p>

    );
}