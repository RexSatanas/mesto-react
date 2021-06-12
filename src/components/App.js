import '../App.css';
import headerLogo from '../images/header-logo.svg'
function App() {
  return (
  <>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mесто</title>
  </head>
  <body class="body">
  <header class="header">
    <img class="header__logo" src={headerLogo} alt="Логотип" />
  </header>
  <main class="content">
    <section class="profile">
      <div class="profile__box">
          <div className="profile__avatar-container">
            <img className="profile__avatar" src="../images/avatarka.png" alt="аватарка"/>
            <img className="profile__avatar-edit" src="../images/pen.svg" alt="кнопка изменения аватара"/>
          </div>
          <div className="profile__info">
            <h1 className="profile__info-name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__info-edit-button profile__click"></button>
            <h2 className="profile__info-status">Исследователь океана</h2>
          </div>
      </div>
      <button type="button" class="profile__add-button profile__click"></button>
    </section>
    <section class="elements">
      <template id="card-template">
        <div class="element">
          <img class="element__image" src="#" alt="#" />
          <button type="button" class="card__del-button"></button>
          <div class="element__box">
            <h2 class="element__name"></h2>
            <div class="element__like-box">
              <button type="button" class="element__like"></button>
              <span class="element__like-counter"></span>
            </div>
          </div>
        </div>
      </template>
    </section>
  </main>
  <footer class="footer">
    <p class="footer__text">© 2020 Mesto Russia</p>
  </footer>
  <div class="popup popup_type_user">
    <form name="profile-info" action="#" class="popup__form popup__edit-form" novalidate>
      <button type="button" class="popup__close-btn"></button>
      <h2 class="popup__title">Редактировать профиль</h2>
      <input id="name" name="name" class="popup__input popup__input-name" type="text" required minlength="2" maxlength="40" placeholder="Имя"/>
      <span id="name-error" class="popup__input-error"></span>
      <input id="status" name="status" class="popup__input popup__input-status" type="text" required minlength="2" maxlength="200" placeholder="О Себе"/>
      <span id="status-error" class="popup__input-error"></span>
      <button id="add-submit-btn" type="submit" class="popup__save-btn">Сохранить</button>
    </form>
  </div>
  <div class="popup popup_type_add" >
    <form name="add-card" action="#" class="popup__form popup__add-form" novalidate>
      <button id="close-add-popup-btn" type="button" class="popup__close-btn popup__close-btn_add"></button>
      <h2 class="popup__title">Новое место</h2>
      <input id="place" name="name" class="popup__input popup__input_name-place" type="text" required minlength="2" maxlength="30" placeholder="Название"/>
      <span class="popup__input-error" id="place-error"></span>
      <input id="link" name="link" class="popup__input popup__input_link-place" type="url" required  placeholder="Ссылка на картинку"/>
      <span class="popup__input-error error2" id="link-error"></span>
      <button type="submit" class="popup__save-btn">Создать</button>
    </form>
  </div>
  <div class="popup popup_type_avatar">
    <form name="avatar-change" action="#" class="popup__form popup__avatar-form" novalidate>
      <button id="close-avatar-popup-btn" type="button" class="popup__close-btn popup__close-btn_avatar"></button>
      <h2 class="popup__title">Обновить аватар</h2>
      <input id="avatar" name="link" class="popup__input popup__input_link-avatar" type="url" required  placeholder="Ссылка на картинку"/>
        <span class="popup__input-error" id="avatar-error"></span>
        <button type="submit" class="popup__save-btn">Да</button>
    </form>
  </div>
  <div class="popup popup_type_photo">
    <div class="popup__container">
      <button type="button" class="popup__close-btn popup__close-btn_img"></button>
      <img alt="#" src="#" class="popup__image" />
      <p class="popup__img-title"></p>
    </div>
  </div>
  <div class="popup popup_type_submit">
    <div class="popup__form popup__container">
      <button class="popup__close-btn popup__close-btn-submit" type="button"></button>
      <h2 class="popup__title">Вы уверены?</h2>
      <button class="popup__save-btn popup__save-btn_confirm" type="button">Да</button>
    </div>
  </div>
  </body>
  </>
);
}

export default App;
