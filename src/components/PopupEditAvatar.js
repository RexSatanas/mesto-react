import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupEditAvatar(props){
    return(
        <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Сохранить' isOpen={props.isOpen} onClose={props.onClose}>
            <input id="avatar" name="link" className="popup__input popup__input_link-avatar" type="url" required placeholder="Ссылка на картинку"/>
            <span className="popup__input-error" id="avatar-error"></span>
        </PopupWithForm>
    )
}

export default PopupEditAvatar