import React from 'react'


export default props => {
    const cb = props.quandoClicar
    const nome = "Cassio"
    return (
        <div>
            <div>Filho</div>
            <div>
                <button onClick={_ => props.quandoClicar(nome, 53, true)}>
                Solicitar informações sobre o Pai
                </button>
            </div>
        </div>
    )
}




