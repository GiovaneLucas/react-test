import React from 'react';

const person = (props) => {
    return (
        <div>
            <h3>Macacos me mordam!!</h3>
            <p>Macaco {props.cor}</p>
            <sub>{props.children}</sub>
        </div>
    )
}

export default person;