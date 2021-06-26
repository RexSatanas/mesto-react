import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext'
function Card(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `card__del-button ${isOwn ? 'card__del-button_visible' : 'card__del-button_hidden'}`
    );
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_active' : 'element__like_inactive'}`)
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <div className="element">
            <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <button type="button" className={cardDeleteButtonClassName}></button>
            <div className="element__box">
                <h2 className='element__name'>{props.card.name}</h2>
                <div className="element__like-box">
                    <button type="button" className={cardLikeButtonClassName}></button>
                    <span className="element__like-counter">{props.card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;