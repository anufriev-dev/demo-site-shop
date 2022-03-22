import './Auth.scss';

import {Button} from '../../components/Button/Button.jsx';

function Auth () {
  return (
    <>
      <div className="wrapAuth">
        <form className='formAuth' action="">
          <h1 className='formAuth__title'>Вход</h1>
          <div className="formAuth__group">
            <input id='formAuth__input--1' type="text" autocomplete="off" className="formAuth__input" placeholder=' '/>
            <label htmlFor="formAuth__input--1" className="formAuth__label">Login</label>
          </div>
          <div className="formAuth__group">
            <input id='formAuth__input--2' type="password"  className="formAuth__input" placeholder=' '/>
            <label htmlFor="formAuth__input--2" className="formAuth__label">Pass</label>
          </div>
          <Button text="Войти" className="formAuth__btn" />
        </form>
      </div>
    </>
  );
}
export {Auth};