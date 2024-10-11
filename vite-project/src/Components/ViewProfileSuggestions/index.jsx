//para cada perfil  import { Card } from 'primereact/card';
// las cards tienen que tener display: 'inline-block'

// para scroller import { DataScroller } from 'primereact/datascroller';

import React from "react";
import { DataScroller } from 'primereact/datascroller';


export function ViewProfileSuggestions() {

    return (
        <div >
            <span> View your friends profile </span>
            <DataScroller inline scrolldirection="horizontal" />
        </div>
        
    );
}