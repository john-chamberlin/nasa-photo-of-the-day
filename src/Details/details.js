import React from 'react';
import './details.css';

export default function Details(props) {

    const {explanation} = props;


    return (
        <div className = 'details-container'>
            <h3 className = 'explanation'>Explanation</h3>
            <p className = 'explanation-text'>{explanation}</p>


        </div>







    )


}