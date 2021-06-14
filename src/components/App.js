import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupEditAvatar from './PopupEditAvatar'
import PopupEditUser from './PopupEditUser'
import PopupAddCard from './PopupAddCard'
import PopupWithConfirm from './PopupWithConfirm'
import ImagePopup from './ImagePopup'
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
        <title>Mесто</title>
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
        <PopupEditUser isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
        <PopupAddCard  isOpen={isAddCardPopupOpen} onClose={closeAllPopups}/>
        <PopupWithConfirm />
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
      </>
  );
}

export default App;
