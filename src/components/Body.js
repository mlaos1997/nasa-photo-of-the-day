import React from 'react';

export default function Body(props) {
    const { picture, serviceVersion, explanation } = props;
    return <div>
        <img src={picture} />
        <p>{serviceVersion}</p>
        <p>{explanation}</p>
    </div>
}