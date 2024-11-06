import React from "react";
import styles from './PostModal.module.css'

export function PostModal({ post, isActive, closeModal }) {

    const imageExample = "https://bulma.io/assets/images/placeholders/128x128.png";

    return ( 
        <div className={`modal ${isActive ? "is-active" : ""}`}>
            <div className={`modal-background ${styles.modalBackground}`} onClick={closeModal}></div>
            <div className={`modal-content ${styles.modalContent}`}>
                {/* <img src={post.url} /> */}
                <div className="box">
                    <img src={imageExample} />
                    <div className={`${styles.postInfo}`}>
                        <span> comentario 1 </span>
                        <span> comentario 2 </span>
                        <span> comentario 3 </span>
                    </div>
                </div> 
            </div>
        </div>
    );
}