import React from 'react'
import './mega.css'


export default props => {

    function gerarNumeroNaoContido(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min, max, array) :
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numeros = []
        for (let i = 0; i < qtde; i++) {
            numeros.push(gerarNumeroNaoContido(1, 60, numeros))
        }
        return numeros
    }

    const [tamanho, setTamanho] = React.useState(props.qtde || 6)
    const numerosIniciais = Array(tamanho).fill(0)
    const [numeros, setNumeros] = React.useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3><strong>{numeros.join(" ")}</strong></h3>
            <div className="Qtd">
                <label>Quantos Numeros</label>
                <div className="Tamanho">
                    <input min="6" max="60" type='number' value={tamanho} onChange={e => setTamanho(+e.target.value)}></input>
                </div>
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(tamanho))}>
                Gerar Numeros
            </button>
        </div>
    )
}