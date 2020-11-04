import React from 'react';
import './image.css';
import axios from 'axios';


export default function Image(props) {

    const {imageUrl} = props;

    return (
        <div className = 'image-container'>
            <img 
                alt = 'NASA img of day'
                src = {imageUrl}
            />
        </div>


    )


}