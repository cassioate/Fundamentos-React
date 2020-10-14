import './TabelaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default props => {

    const tabelaProduto = produtos.map(
        (produto) => {
            return (
                <tr className={produto.id % 2 === 0 ? "Par" : ""} key={produto.id} /*É NECESSARIO INFORMAR QUEM VAI SER A PK NESSA LISTA PARA EVITAR PROBLEMA*/>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td> R${produto.preco.toFixed(2).replace('.', ',')} </td>
                </tr >
            )
        }
    );

    /* 
    Outra opção:

        function getLinhas() {
            return produtos.map((produto, i) => {
                return (
                    <tr> className={produto.id % 2 === 0 ? "Par" : ""} key={produto.id}/>
                        <td>{produto.id}</td>
                        <td>{produto.nome}</td>
                        <td> R${produto.preco.toFixed(2).replace('.',',')} </td>
                    </tr>

                )
            })
        }

    */

    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {tabelaProduto}

                    {/* OUTRA OPÇÃO:
                    {getLinhas() */}

                </tbody>
            </table>
        </div>
    )
}