import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupEditAvatar from './PopupEditAvatar'
import PopupEditUser from './PopupEditUser'
import PopupAddCard from './PopupAddCard'
import PopupWithConfirm from './PopupWithConfirm'
import ImagePopup from './ImagePopup'
import api from '../utils/api'
import {CurrentUserContext} from '../contexts/CurrentUserContext'
function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {

        Promise.all([
            api.getUser(),
            api.getCards()
        ])
            .then(([userData, cardsData]) => {
                setCurrentUser(userData)
                setCards(cardsData)
            })
            .catch((err) => console.log(err))
    }, []);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    function handleAddPlaceClick() {
        setIsAddCardPopupOpen(true)
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }
    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err => {
            console.log(`Ошибка: ${err}.`)
        })
    }
    function handleCardDelete(card){
        api.deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter(item => item !== card)
                setCards(newCards)
            })
            .catch(err => {
                console.log(`Ошибка: ${err}.`)
            })
    }

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddCardPopupOpen(false);
        setSelectedCard(null);
    }
  return (
      <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
              cards={cards}
          />
          <Footer />
          <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
          <PopupEditUser isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
          <PopupAddCard  isOpen={isAddCardPopupOpen} onClose={closeAllPopups}/>
          <PopupWithConfirm />
          <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
      </CurrentUserContext.Provider>
  );
}

export default App;
