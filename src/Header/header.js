import React from 'react';
import styled from 'styled-components';

export default function Header(props) {
    const {title, date} = props;






    return (
        <StyledHeader className = 'header-container'>
            <h1 className = 'potd'>Nasa Photo of the Day: {date}</h1>
            <h2 className = 'title'>{title}</h2>
        </StyledHeader>




    )
}

const StyledHeader = styled.div`
    color:${(pr) => pr.theme.secondaryColor};
    margin-top: 3rem;


    h2 {
        color: ${(pr) => pr.theme.primaryColor}
    }


`