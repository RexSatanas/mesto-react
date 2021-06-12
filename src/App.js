import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
function App() {
  return (
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Mесто</title>
        <body className='body'>
        <Header />
        <Main />
        <Footer />
        <div className="popup popup_type_user">
          <form name="profile-info" action="#" className="popup__form popup__edit-form" noValidate>
            <button type="button" className="popup__close-btn" />
            <h2 className="popup__title">Редактировать профиль</h2>
            <input id="name" name="name" className="popup__input popup__input-name" type="text" required minLength={2} maxLength={40} placeholder="Имя" />
            <span id="name-error" className="popup__input-error" />
            <input id="status" name="status" className="popup__input popup__input-status" type="text" required minLength={2} maxLength={200} placeholder="О Себе" />
            <span id="status-error" className="popup__input-error" />
            <button id="add-submit-btn" type="submit" className="popup__save-btn">Сохранить</button>
          </form>
        </div>
        <div className="popup popup_type_add">
          <form name="add-card" action="#" className="popup__form popup__add-form" noValidate>
            <button id="close-add-popup-btn" type="button" className="popup__close-btn popup__close-btn_add" />
            <h2 className="popup__title">Новое место</h2>
            <input id="place" name="name" className="popup__input popup__input_name-place" type="text" required minLength={2} maxLength={30} placeholder="Название" />
            <span className="popup__input-error" id="place-error" />
            <input id="link" name="link" className="popup__input popup__input_link-place" type="url" required placeholder="Ссылка на картинку" />
            <span className="popup__input-error error2" id="link-error" />
            <button type="submit" className="popup__save-btn">Создать</button>
          </form>
        </div>
        <div className="popup popup_type_avatar">
          <form name="avatar-change" action="#" className="popup__form popup__avatar-form" noValidate>
            <button id="close-avatar-popup-btn" type="button" className="popup__close-btn popup__close-btn_avatar" />
            <h2 className="popup__title">Обновить аватар</h2>
            <input id="avatar" name="link" className="popup__input popup__input_link-avatar" type="url" required placeholder="Ссылка на картинку" />
            <span className="popup__input-error" id="avatar-error" />
            <button type="submit" className="popup__save-btn">Да</button>
          </form>
        </div>
        <div className="popup popup_type_photo">
          <div className="popup__container">
            <button type="button" className="popup__close-btn popup__close-btn_img" />
            <img alt="#" src="#" className="popup__image" />
            <p className="popup__img-title" />
          </div>
        </div>
        <div className="popup popup_type_submit">
          <div className="popup__form popup__container">
            <button className="popup__close-btn popup__close-btn-submit" type="button" />
            <h2 className="popup__title">Вы уверены?</h2>
            <button className="popup__save-btn popup__save-btn_confirm" type="button">Да</button>
          </div>
        </div>
        </body>
      </>
  );
}

export default App;
