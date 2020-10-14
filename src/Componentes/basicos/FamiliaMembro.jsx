import React from 'react'
import Familia from './Familia'

export default props => {
    return(
        <div>
            {props.nome} <strong> {props.sobrenome} </strong>
        </div>
    );
}