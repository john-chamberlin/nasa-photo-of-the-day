import React from 'react';
import styled from 'styled-components'

export default function Details(props) {

    const {explanation} = props;


    return (
        <StyledDetails className = 'details-container'>
            <h3 className = 'explanation'>Explanation</h3>
            <p className = 'explanation-text'>{explanation}</p>
        </StyledDetails>







    )


}

const StyledDetails = styled.div`
    width:50%;
    margin:0 auto;




`