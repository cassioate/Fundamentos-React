import React from 'react';

export default (props) => {

    const { min, max } = props;

    let numero = parseInt(Math.random() * (min, max));

    return (
        <div>
            <h2> O numero aleatorio é: </h2>
            <h2> Valor min: {min} </h2>
            <h2> Varlo max: {max} </h2>
            <h2> <strong> {numero} </strong> </h2>
        </div>
    )
} 
