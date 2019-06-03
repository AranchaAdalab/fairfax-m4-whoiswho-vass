import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  render() {
    const { changePassword, passwordState } = this.props;
    return (
      <React.Fragment>
        <header className="login__header">
          <h1 className="login__title">VASS</h1>
        </header>
        <div className="login__container">
          <div className="inputs__container">
            <label htmlFor="input__user" className="label__item label__user">
              Usuario
            </label>
            <input
              type="text"
              id="input__user"
              className="input__item input__user"
            />
            <label
              htmlFor="input__password"
              className="label__item label__password"
            >
              Contraseña
            </label>
            <div className="password__container">
              <input
                type={passwordState}
                id="input__password"
                className="input__item input__password"
              />
              <i
                className={`eye fas fa-eye${
                  passwordState === 'password' ? '' : '-slash'
                } `}
                onClick={changePassword}
              />
            </div>
            <Link to="/search" className="input__submit--link">
              <input type="submit" value="Entrar" className="input__submit" />
            </Link>
          </div>
        </div>
        <div className="who__container">
          <h2 className="who__title">
            <span className="who__span">Who</span>{' '}
            <span className="is__span">is</span>{' '}
            <span className="who__span">Who</span>
          </h2>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
