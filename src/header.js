import React from 'react';
import './header.css';

export default function Header(props) {
    const {title, date} = props;






    return (
        <div className = 'header-container'>
            <h1 className = 'title'>{title}</h1>
            <h3 className = 'date'>{date}</h3>
        </div>




    )
}