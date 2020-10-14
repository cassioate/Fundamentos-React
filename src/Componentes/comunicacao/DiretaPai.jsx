import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho nome="filho1" idade={20} nerd={true}> </DiretaFilho>
            <DiretaFilho nome="filho2" idade={30} nerd={false}> </DiretaFilho>
        </div>
    )
}