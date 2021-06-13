import React from 'react'
import PopupWithForm from './PopupWithForm'
function PopupEditUser(props){
    return(
        <PopupWithForm name='edit' title='Редактировать профиль' buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose}>
            <input id="name" name="name" className="popup__input popup__input-name" type="text" required minLength="2" maxLength="40" placeholder="Имя"/>
            <span id="name-error" className="popup__input-error"></span>
            <input id="status" name="status" className="popup__input popup__input-status" type="text" required minLength="2" maxLength="200" placeholder="О Себе"/>
            <span id="status-error" className="popup__input-error"></span>
        </PopupWithForm>
    )
}
export default PopupEditUser

