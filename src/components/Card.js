import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="element">
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <button type="button" className="card__del-button"></button>
            <div className="element__box">
                <h2 className='element__name'>{props.card.name}</h2>
                <div className="element__like-box">
                    <button type="button" className="element__like"></button>
                    <span className="element__like-counter">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;