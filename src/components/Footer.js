import React from 'react';
import styled from 'styled-components';


const StyledFooter = styled.div`
p { color: #685206; 
    font-family: 'Helvetica Neue', sans-serif; 
    font-size: 24px; 
    line-height: 24px; 
    margin: 0px auto; 
    width: 80%;
    }
`
export default function Footer(props) {
    return <StyledFooter>
        <p>Published: {props.date}</p>
    </StyledFooter>
}