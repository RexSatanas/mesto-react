import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupWithConfirm() {
    return (
        <PopupWithForm name="submit" title="Вы уверены?" buttonText="Да"></PopupWithForm>
    )
}

export default PopupWithConfirm