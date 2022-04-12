import './Registry.scss';

import { Button } from '../Button/Button';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function Registry () {

  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  function toggle () {
    document.querySelector('.modal-window').classList.toggle('wrapAuth-active');
    if(document.querySelector('.modal-window').classList.contains('wrapAuth-active')){
      window.addEventListener('click', (e) => {
        const wrap = document.querySelector('.wrapAuth');
        if(e.target == wrap){
          document.querySelector('.modal-window').classList.remove('wrapAuth-active');
          setLogin('');
          setPass('');
        }
      })
    }
  }

  return(
  <>
      <div className='registry'>
        <a onClick={toggle} className='registry__link' href="#">Войти</a>
      </div>
      <div className='modal-window'>
        <div className='wrapAuth'>
        <form className='formAuth' action="">
          <h1 className='formAuth__title'>Вход</h1>
          <div className="formAuth__group">
            <input id='formAuth__input--1' type="text"
             autocomplete="off" className="formAuth__input"
              placeholder=' ' onChange={(e) => setLogin(e.target.value) } value={login}/>
            <label htmlFor="formAuth__input--1" className="formAuth__label">Login</label>
          </div>
          <div className="formAuth__group">
            <input id='formAuth__input--2' type="password"
              className="formAuth__input" placeholder=' '
              onChange={(e) => setPass(e.target.value) } value={pass}
              />
            <label htmlFor="formAuth__input--2" className="formAuth__label">Pass</label>
          </div>
          <Button text="Войти" className="formAuth__btn" />
          <div className='formAuth__wrap-button'>
            <Link to={"/feed"}>Зарегистрироваться</Link>
          </div>
        </form>
      </div>
      </div>
  </>
  );
}
export default Registry;