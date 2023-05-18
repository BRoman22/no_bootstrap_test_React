import React, { useState } from "react";
import logo from "../../images/logo.svg";
import "./modal.css";

const RegistrationModal = ({ toggleRegistration, toggleLogin }) => {
  const [showPass, setShowPass] = useState({
    icon: "validation__show-password_show",
    type: "password",
  });

  function showPassword() {
    showPass.icon === "validation__show-password_show"
      ? setShowPass({ icon: "validation__show-password_hide", type: "text" })
      : setShowPass({
          icon: "validation__show-password_show",
          type: "password",
        });
  }

  const [input, setInput] = useState({
    email: { value: "", errorText: "", error: "" },
    pass: { value: "", errorText: "", error: "" },
    name: { value: "", errorText: "", error: "" },
  });

  function checkSpace() {
    if (input.name.value === "") {
      setInput({
        ...input,
        name: { errorText: "Введите имя", error: "error" },
      });
    }
    if (input.email.value === "") {
      setInput({
        ...input,
        email: { errorText: "Введите почту", error: "error" },
      });
    }
    if (input.pass.value === "") {
      setInput({
        ...input,
        pass: { errorText: "Введите пароль", error: "error" },
      });
    }
  }

  function submit(e) {
    e.preventDefault();
    checkSpace();
  }

  return (
    <div className="modal-wrapper">
      <a className="overlay" onClick={toggleRegistration}>
        <div className="modal__body" onClick={(e) => e.stopPropagation()}>
          <img
            src={logo}
            alt="uber eats logo"
            className="logo logo_place_modal"
          ></img>
          <h2 className="modal__title">Добро пожаловать!</h2>
          <p className="modal__text">Войдите, чтобы заказать</p>
          <a
            className="modal__close modal__close_place"
            onClick={toggleRegistration}
          ></a>
          <form className="modal__form" noValidate>
            <div className="modal__input-wrapper">
              <input
                type={"text"}
                value={input.name.value}
                className={`modal__input modal__input_registration_name ${input.email.error}`}
                placeholder="Имя"
                onChange={(e) =>
                  setInput({ ...input, name: { value: e.target.value } })
                }
              ></input>
              <p className="modal__error-message">{input.name.errorText}</p>
            </div>
            <div className="modal__input-wrapper">
              <input
                type={"email"}
                value={input.email.value}
                className={`modal__input modal__input_registration_email ${input.email.error}`}
                placeholder="Электронная почта"
                onChange={(e) =>
                  setInput({ ...input, email: { value: e.target.value } })
                }
              ></input>
              <p className="modal__error-message">{input.email.errorText}</p>
            </div>
            <div className="modal__input-wrapper">
              <input
                type={showPass.type}
                value={input.pass.value}
                className={`modal__input modal__input_registration_password ${input.pass.error}`}
                placeholder="Пароль"
                onChange={(e) =>
                  setInput({ ...input, pass: { value: e.target.value } })
                }
              ></input>
              <p className="modal__error-message">{input.pass.errorText}</p>
              <a
                className={`modal__show-password ${showPass.icon}`}
                onClick={() => showPassword()}
              ></a>
            </div>
            <p className="modal__text">
              Уже есть аккаунт?
              <a
                className="modal__text modal__text_button-registration"
                onClick={() => {
                  toggleRegistration();
                  toggleLogin();
                }}
              >
                Войти
              </a>
            </p>
            <button
              className="modal__button modal__button_login"
              onClick={submit}
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </a>
    </div>
  );
};

export default RegistrationModal;
