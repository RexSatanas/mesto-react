function Main() {
    function handleEditAvatarClick(e) {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened')
    }
    function handleEditProfileClick(e) {
        document.querySelector('.popup_type_user').classList.add('popup_opened')
    }
    function handleAddPlaceClick(e) {
        document.querySelector('.popup_type_add').classList.add('popup_opened')
    }

    return(
        <main className="content">
            <section className="profile">
                <div className="profile__box">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar" src="images/avatarka.png" alt="аватарка" />
                        <img className="profile__avatar-edit" src="images/pen.svg" alt="кнопка изменения аватара" onClick={handleEditAvatarClick}/>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__info-name">Жак-Ив Кусто</h1>
                        <button type="button" className="profile__info-edit-button profile__click" onClick={handleEditProfileClick}/>
                        <h2 className="profile__info-status">Исследователь океана</h2>
                    </div>
                </div>
                <button type="button" className="profile__add-button profile__click" onClick={handleAddPlaceClick}/>
            </section>
            <section className="elements">
                <template id="card-template" />
            </section>
        </main>
    )
}
export default Main