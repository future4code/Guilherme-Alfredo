import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <div className="info">
                <h4>{ props.nome }</h4> 
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardPequeno;