import React from 'react'
import './input.css';

export default props => {

    const [valor, setValor] = React.useState("Digite Algo")

    function quandoMudar(e){
        setValor(e.target.value)
    }

    return (
        <div className="Input" >
            <h2>Controlado
                  
            </h2>
            <input value={valor} onChange={quandoMudar} />
            <h2>Undefined</h2>
            <input value={undefined}/>
        </div>
    )

}