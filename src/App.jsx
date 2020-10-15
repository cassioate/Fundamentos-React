import './App.css'
import React from 'react'

import Card from './Componentes/Layout/Card'

import Mega from './Componentes/mega/Mega'
import Contador from './Componentes/contador/Contador'
import Input from './Componentes/formulario/input'
import IndiretaPai from './Componentes/comunicacao/IndiretaPai'
import DiretaPai from './Componentes/comunicacao/DiretaPai'
import UsuarioInfo from './Componentes/condicional/UsuarioInfo'
import ParOuImpar from './Componentes/condicional/ParOuImpar'
import TabelaProdutos from './Componentes/repeticao/TabelaProdutos'
import ListaAlunos from './Componentes/repeticao/ListaAlunos'
import Familia from './Componentes/basicos/Familia'
import FamiliaMembro from './Componentes/basicos/FamiliaMembro'
import Aleatorio from './Componentes/basicos/Aleatorio'
import Fragmento from './Componentes/basicos/Fragmento'
import ComParametro from './Componentes/basicos/ComParametro'
import Primeiro from './Componentes/basicos/Primeiro'

export default () =>
    <div className="App">

        <h1>Fundamentos REACT</h1>


        <div className="Cards">

            <Card titulo="#13 - Mega" color="#E6E6FA">
                <Mega>
                </Mega>
            </Card>

            <Card titulo="#12 - Contador" color="#E6E6FA">
                <Contador>
                </Contador>
            </Card>

            <Card titulo="#11 - Componente Controlado (Input)" color="#8BAD39">
                <Input>
                </Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#5555fc">
                <IndiretaPai>
                </IndiretaPai>
            </Card>

            <Card titulo="#9 - Comunicação Direta" color="#6495ed">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#FF6C55">
                <ParOuImpar
                    numero={20}
                />
                <UsuarioInfo
                    usuario={{ nome: "Cassio" }}
                />
            </Card>

            <Card titulo="#07 - Tabela de Produtos" color="#FF6C55">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Lista de Alunos" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio aleatorio" color="#FFFACD">
                <Aleatorio
                    min={100}
                    max={600}
                />
            </Card>

            <Card titulo="#03 - Fragmento" color="#E0EEE0">
                <Fragmento
                />
            </Card>

            <Card titulo="#02 - Com parametro" color="#8B8989">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="Cassio"
                    nota={10}
                />
            </Card>

            <Card titulo="#02 - Com parametro" color="#CDB79E">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="José"
                    nota={5}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#080">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

