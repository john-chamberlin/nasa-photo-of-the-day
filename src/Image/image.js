import React from 'react';
import styled from 'styled-components';


export default function Image(props) {

    const {imageUrl} = props;

    return (
        <StyledImage className = 'image-container'>
            <img 
                alt = 'NASA img of day'
                src = {imageUrl}
            />
        </StyledImage>


    )


}

const StyledImage = styled.div`
    margin: 1rem;



`