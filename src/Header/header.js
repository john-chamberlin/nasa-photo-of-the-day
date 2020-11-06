import React from 'react';
import styled from 'styled-components';

export default function Header(props) {
    const {title, date} = props;






    return (
        <StyledHeader className = 'header-container'>
            <h1 className = 'potd'>Nasa Photo of the Day</h1>
            <h3 className = 'date'> {date}</h3>
            <h2 className = 'title'>{title}</h2>
        </StyledHeader>




    )
}

const StyledHeader = styled.div`
    color:${(pr) => pr.theme.tertiaryColor};
    margin-top: 3rem;


`