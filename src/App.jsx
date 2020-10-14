import './index.css'
import './App.css'
import React from 'react'
import Primeiro from './Componentes/basicos/Primeiro'
import ComParametro from './Componentes/basicos/ComParametro'
import Fragmento from './Componentes/basicos/Fragmento'
import Aleatorio from './Componentes/basicos/Aleatorio'
import Card from './Componentes/Layout/Card'
import Familia from './Componentes/basicos/Familia'
import FamiliaMembro from './Componentes/basicos/FamiliaMembro'
import ListaAlunos from './Componentes/repeticao/ListaAlunos'
import TabelaProdutos from './Componentes/repeticao/TabelaProdutos'
import ParOuImpar from './Componentes/condicional/ParOuImpar'
import UsuarioInfo from './Componentes/condicional/UsuarioInfo'
import DiretaPai from './Componentes/comunicacao/DiretaPai'
import IndiretaPai from './Componentes/comunicacao/IndiretaPai'
import Input from './Componentes/formulario/input'
import Contador from './Componentes/contador/Contador'


export default () =>
    <div className="App">

        <h1>Fundamentos REACT</h1>


        <div className="Cards">

            <Card titulo="#13 - Contador" color="#E6E6FA">
                <Contador>
                </Contador>
            </Card>

            <Card titulo="#12 - Componente Controlado (Input)" color="#8BAD39">
                <Input>
                </Input>
            </Card>

            <Card titulo="#11 - Comunicação Indireta" color="#5555fc">
                <IndiretaPai>
                </IndiretaPai>
            </Card>

            <Card titulo="#10 - Comunicação Direta" color="#6495ed">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#09 - Renderização Condicional" color="#FF6C55">
                <ParOuImpar
                    numero={20}
                />
                <UsuarioInfo
                    usuario={{ nome: "Cassio" }}
                />
            </Card>

            <Card titulo="#08 - Tabela de Produtos" color="#FF6C55">
                <TabelaProdutos />
            </Card>

            <Card titulo="#07 - Lista de Alunos" color="#FF4C65">
                <ListaAlunos />
            </Card>

            <Card titulo="#06 - Componente com filhos" color="#00C8F8">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#05 - Primeiro" color="#080">
                <Primeiro></Primeiro>
            </Card>

            <Card titulo="#04 - Desafio aleatorio" color="#FFFACD">
                <Aleatorio
                    min={100}
                    max={600}
                />
            </Card>

            <Card titulo="#03 - Com parametro" color="#8B8989">
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

            <Card titulo="#01 - Fragmento" color="#E0EEE0">
                <Fragmento
                    titulo="Segundo Componente"
                    aluno="José"
                    nota={5}
                />
            </Card>
        </div>
    </div>

