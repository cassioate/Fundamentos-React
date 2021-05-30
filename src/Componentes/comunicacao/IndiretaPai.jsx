import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = React.useState('C')
    const [idade, setIdade] = React.useState(0)
    const [nerd, setNerd] = React.useState(false)

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>{nome}</div>
            <div>{idade}</div>
            <div>{nerd ? "Verdadeiro" : "Falso"}</div>
            {/* Enviando a função fornecerInformacoes para o filho, 
            para que ele devolta com os valores que serão repassados de lá para cá */}
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}