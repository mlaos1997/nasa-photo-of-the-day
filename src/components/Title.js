import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
padding: .01% 0;

h1 {
    color: #111; 
    font-family: 'Helvetica Neue', sans-serif; 
    font-size: 75px; 
    font-weight: bold; 
    letter-spacing: -1px; 
    line-height: 1; 
    text-align: center;
}

`
export default function Title(props) {
    return (
        <StyledTitle>
            <h1>{props.header}</h1>
        </StyledTitle>
    )
}