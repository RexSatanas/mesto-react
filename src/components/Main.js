import Pen from '../images/pen.svg'
import React from 'react'
import api from '../utils/api'
import Card from '../components/Card'
import {CurrentUserContext} from '../contexts/CurrentUserContext'
function Main(props) {
    const [cards, setCards] = React.useState([]);
    const currentUser = React.useContext(CurrentUserContext)

    React.useEffect(() => {

        Promise.all([
            api.getCards()
        ])
            .then(([cards]) => {
                setCards(cards);
            })
            .catch((err) => console.log(err))
    }, []);


    return(
        <main className="content">
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={currentUser.avatar} alt="аватарка" />
                        <img className="profile__avatar-edit" src={Pen} alt="кнопка изменения аватара" onClick={props.onEditAvatar}/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__info-name">{currentUser.name}</h1>
                        <button type="button" className="profile__info-edit-button profile__click" onClick={props.onEditProfile}/>
                        <h2 className="profile__info-status">{currentUser.about}</h2>
                    </div>
                </div>
                <button type="button" className="profile__add-button profile__click" onClick={props.onAddPlace}/>
            </section>
            <section className="elements">
                {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                ))}
            </section>
        </main>
    )
}
export default Main