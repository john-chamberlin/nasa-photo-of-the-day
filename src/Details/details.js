import React from 'react';
import styled from 'styled-components'

export default function Details(props) {

    const {explanation} = props;


    return (
        <StyledDetails className = 'details-container'>
            <h2 className = 'explanation'>Explanation</h2>
            <p className = 'explanation-text'>{explanation}</p>
        </StyledDetails>







    )


}

const StyledDetails = styled.div`
    width:50%;
    margin:0 auto;
    color:${(pr) => pr.theme.tertiaryColor};
    line-height: 1.75;




`