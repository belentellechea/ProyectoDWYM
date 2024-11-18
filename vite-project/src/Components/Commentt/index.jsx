import React, { useEffect, useState } from "react";
import { deleteComment, getSpecificComment } from "../../Services/postService";
import { useAuth } from "../../Context/AuthContext";
import { DeleteOutlined } from "@ant-design/icons";
import { useUser } from "../../Context/UserContext";
import styles from "./Commentt.module.css";

export function Commentt({ comment, post }) {
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
        fetchComment();
    }, []);



    return (
        // <p> <strong>{comm?.user?.username}</strong>{"   "}{comm?.content} <DeleteOutlined className={styles.deleteIcon} style={{marginLeft: 20}} onClick={() => deleteComment(post, comm, updatePost, auth)}/></p>
        <p className={styles.comment}>
            <strong className={styles.username}>{comm?.user?.username}</strong>
            <span className={styles.content}>{comm?.content}</span>
            <DeleteOutlined
                className={styles.deleteIcon}
                onClick={() => deleteComment(post, comm, updatePost, auth)}
            />
        </p>

    );
}