import React, { useCallback, useMemo, useState } from 'react';
import logo from '../../images/logo.svg';
import './modal.css';

const LoginModal = ({ toggleLogin, toggleRegistration }) => {
  function submit(e) {
    e.preventDefault();
    toggleLogin();
  }

  const passOptions = {
    masked: {
      icon: 'modal__show-password_hide',
      type: 'password',
    },
    showed: {
      icon: 'modal__show-password_show',
      type: 'text',
    },
  };

  const [pass, setPass] = useState(true);
  const { icon: passIcon, type: passType } = useMemo(
    () => (pass ? passOptions.masked : passOptions.showed),
    [pass]
  );

  const togglePass = useCallback(() => setPass((e) => !e), []);

  return (
    <div className="modal-wrapper">
      <a href="#" className="overlay" onClick={toggleLogin}>
        <div className="modal__body" onClick={(e) => e.stopPropagation()}>
          <img
            src={logo}
            alt="uber eats logo"
            className="logo logo_place_modal"
          ></img>
          <h2 className="modal__title">Добро пожаловать!</h2>
          <p className="modal__text">Войдите, чтобы заказать</p>
          <button
            type="button"
            className="modal__close modal__close_place"
            onClick={toggleLogin}
          ></button>
          <form className="modal__form" noValidate>
            <div className="modal__input-wrapper">
              <input
                type="email"
                className="modal__input modal__modal_login_email"
                placeholder="Электронная почта"
              ></input>
              <p className="modal__error-message"></p>
            </div>
            <div className="modal__input-wrapper">
              <input
                type={passType}
                className="modal__input modal__input_login_password"
                placeholder="Пароль"
                autoComplete="on"
              ></input>
              <p className="modal__error-message">{}</p>
              <button
                type="button"
                className={`modal__show-password ${passIcon}`}
                onClick={togglePass}
              ></button>
            </div>
            <p className="modal__text">
              Нет аккаунта?
              <button
                type="button"
                className="modal__text modal__text_button-registration"
                onClick={() => {
                  toggleLogin();
                  toggleRegistration();
                }}
              >
                Зарегистрироваться
              </button>
            </p>
            <button
              className="modal__button modal__button_login"
              onClick={submit}
            >
              Войти
            </button>
          </form>
        </div>
      </a>
    </div>
  );
};

export default LoginModal;
