import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import PopupEditAvatar from './components/PopupEditAvatar'
import PopupEditUser from './components/PopupEditUser'
import PopupAddCard from './components/PopupAddCard'
import PopupWithConfirm from './components/PopupWithConfirm'
import PopupWithPhoto from './components/PopupWithPhoto'
function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

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

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddCardPopupOpen(false);
        setSelectedCard(null);
    }
  return (
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mесто</title>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
        <PopupEditUser isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        <PopupAddCard  isOpen={isAddCardPopupOpen} onClose={closeAllPopups}/>
        <PopupWithConfirm />
        <PopupWithPhoto card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
      </>
  );
}

export default App;
