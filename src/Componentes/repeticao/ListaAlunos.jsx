import React from 'react'
import '../../data/alunos'
import alunos from '../../data/alunos'

export default props => {
    const listaAluno = alunos.map(
        (aluno) => {
            return (
                <li key={aluno.id} /*É NECESSARIO INFORMAR QUEM VAI SER A PK NESSA LISTA PARA EVITAR PROBLEMA*/>
                    {aluno.id}) { aluno.nome} - { aluno.nota}
                </li >
            )
        }
    );

    return (

        <div>
            <ul style= {{listStyle: "none"} /*Só para remover as bolinhas da lista*/}>
               {listaAluno}
            </ul>
        </div>

    )

}