import React from 'react';
import './CardLinguas.css'

function CardLinguas(props) {
    return (
        <div className="languagecard-container">
            <div className="linguas">
                <div className="ing">
                    <h4>{ props.nome }</h4> 
                    <p>{ props.descricao }</p>
                </div>
                <div className="esp">
                    <h4>{ props.nome2 }</h4> 
                    <p>{ props.descricao2 }</p>
                </div>
                <div className="it">
                    <h4>{ props.nome3 }</h4> 
                    <p>{ props.descricao3 }</p>
                </div>
                
            </div>
        </div>
    )
}

export default CardLinguas; 