//para cada perfil  import { Card } from 'primereact/card';
// las cards tienen que tener display: 'inline-block'

// para scroller import { DataScroller } from 'primereact/datascroller';

import React from "react";
import { ProfilePreView } from "../ProfilePreView";
import styles from "./ViewProfileSuggestions.module.css";

export function ViewProfileSuggestions({ profiles }) {

    return (
        <div >
            <span className={styles.viewTitle}> View your friends profile </span>
            <div className={`${styles.container}`} style={{width:"100%", overflowX:"auto", maxWidth:"1100px"}}>
                    {profiles.map((profile) => (
                        <ProfilePreView className={`scroller-item ${styles.item}`} userName={profile.userName} picture={profile.picture}>
                        </ProfilePreView>
                    ))}
                    
            </div>
        </div>
        
    );
}
