import React, { PureComponent } from 'react';

export default function (props) {

    const status = props.nota >= 7 ? 'aprovado' : 'reprovado com louvor kkk'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                {props.aluno} tem nota {props.nota} e está {status}
            </p>
        </div>
    );
}