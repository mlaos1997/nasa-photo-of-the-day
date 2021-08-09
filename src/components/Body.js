import React from 'react';
import styled from 'styled-components';

const StyledBody = styled.div`
position: relative;

div {
    margin: 2%;
    position: absolute;
    top: 71%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

p { color: #685206; 
font-family: 'Helvetica Neue', sans-serif; 
font-size: 24px; 
line-height: 24px; 
margin: 90px auto 0px; 
text-align: justify; 
text-justify: inter-word; 
width: 80%;
}

h2 {
    color: #111; 
    font-family: 'Helvetica Neue', sans-serif; 
    font-size: 25px; 
    font-weight: bold; 
    letter-spacing: -1px; 
    line-height: 1; 
    text-align: center;
}

img {
    display: block;
    margin: 0 auto;
    border: 3px solid transparent;
	background: linear-gradient(#000, #000) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #00C9A7, #845EC2) border-box;
}

button {
    --x: 50%;
	--y: 50%;    
	appearance: none;
	padding: 1em 2em;
	color: #DDDDDD;
	pointer-events: none;
	outline: none;
    border-radius: 0px;
    font-size: 18px;

	border: 3px solid transparent;
	background: linear-gradient(#000, #000) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #00C9A7, #845EC2) border-box;
}

p {
}

`
export default function Body(props) {
    const { picture, serviceVersion, explanation } = props;
    return <StyledBody>
        <img src={picture} />
        <div>
            <button src="#">Service Version: {serviceVersion}</button>
        </div>
        <p>{explanation}</p>
    </StyledBody>
}