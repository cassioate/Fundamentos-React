import React from 'react'


export default props => {
    const cb = props.quandoClicar
    const nome = "Cassio"
    return (
        <div>
            <div>Filho</div>
            <div>
                <button onClick={_ => cb(nome, 26, true)}>
                Solicitar informações sobre o Pai
                </button>
            </div>
        </div>
    )
}




