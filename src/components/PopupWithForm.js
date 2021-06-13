function PopupWithForm(props){
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
            <form name={props.name} className={`popup__form`} noValidate>
                <button type="button" className="popup__close-btn" onClick={props.onClose}/>
                <h2 className="popup__title">{props.title}</h2>
                {props.children}
                <button id="add-submit-btn" type="submit" className="popup__save-btn" >{props.buttonText}</button>
            </form>
        </div>
    )
}

export default PopupWithForm