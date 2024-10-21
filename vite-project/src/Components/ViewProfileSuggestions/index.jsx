//para cada perfil  import { Card } from 'primereact/card';
// las cards tienen que tener display: 'inline-block'

// para scroller import { DataScroller } from 'primereact/datascroller';

import React from "react";
import { ProfilePreView } from '../ProfilePreView';
import styles from './ViewProfileSuggestions.module.css';

export function ViewProfileSuggestions({ profiles }) {

    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        container.scrollTo({
          top: 0,
          left: container.scrollLeft + scrollAmount,
          behavior: 'smooth'
        });
    };
    
    return (
        <div >
            <span className={styles.viewTitle}> View your friends profile </span>
            <div className={`${styles.container}`} onWheel={handleScroll}>
                    {profiles.map((profile) => (
                        <ProfilePreView className={`scroller-item ${styles.item}`} userName={profile.userName} picture={profile.picture}>
                        </ProfilePreView>
                    ))}
            </div>
        </div>
        
    );
}