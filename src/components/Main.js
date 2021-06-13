import Pen from '../images/pen.svg'
import React from 'react'
import api from '../utils/Api'
import Card from '../components/Card'
function Main(props) {
    const [userName, setuserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {


        Promise.all([
            api.getUser(),
            api.getCards()
        ])
            .then(([userData, cards]) => {
                setuserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cards)
            })
            .catch((err) => console.log(err))
    }, []);


    return(
        <main className="content">
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src={userAvatar} alt="аватарка" />
                        <img className="profile__avatar-edit" src={Pen} alt="кнопка изменения аватара" onClick={props.onEditAvatar}/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__info-name">{userName}</h1>
                        <button type="button" className="profile__info-edit-button profile__click" onClick={props.onEditProfile}/>
                        <h2 className="profile__info-status">{userDescription}</h2>
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