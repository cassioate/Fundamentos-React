import React from 'react';

export default (props) => {

    const { min, max } = props;

    let numero = parseInt(Math.random() * (min, max));

    return (
        <div>
            <p> Valor min: {min} </p>
            <p> Varlo max: {max} </p>
            <p> O numero aleatorio é: <strong> {numero} </strong></p>
        </div>
    )
} 
