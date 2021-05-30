import React from 'react'


export default props => {
    //buscando a função do PAI para utilizar dentro do filho
    const cb = props.quandoClicar
    const nome = "Cassio"
    return (
        <div>
            <div>Filho</div>
            <div>
                {/* Utilizando a função buscada no PAI para pasar
                 os dados para o PAI através do filho
                */}
                <button onClick={_ => cb(nome, 26, true)}>
                Solicitar informações sobre o Pai
                </button>
            </div>
        </div>
    )
}




