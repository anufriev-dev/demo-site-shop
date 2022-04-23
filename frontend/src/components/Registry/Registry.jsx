import './Registry.scss'
import {useSelector,useDispatch} from 'react-redux'
import {setLogin,setPass,nulls} from '../../store/authSlice'
import { authariz } from '../../store/authSlice'
import { Button } from '../Button/Button'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

function Registry () {

  const {login,pass} = useSelector(state => state.auth)

  const dispath = useDispatch()

  const tokenUser = document.cookie.includes('user=')
  const tokenRole = document.cookie.includes('role=ADMIN')


  
  useEffect(() => {
    document.querySelector('.formAuth__btn')?.addEventListener('click', sub)
  }, [])

  function sub (e) {
    e.preventDefault()
    dispath( authariz())
  }

  function toggle () {
    document.querySelector('.modal-window').classList.toggle('wrapAuth-active')
    if(document.querySelector('.modal-window').classList.contains('wrapAuth-active')){
      window.addEventListener('click', (e) => {
        const wrap = document.querySelector('.wrapAuth')
        if(e.target === wrap){
          document.querySelector('.modal-window').classList.remove('wrapAuth-active')
          dispath(nulls())
        }
      })
    }
  }

  function exit () {
    window.cookieStore.delete('user')
    window.cookieStore.delete('role')
    document.location.reload()
  }
  return(
  <>
      <div className="registry">
        {tokenRole
          ? <Link to="/admin" className="btn-green-qa ">Перейти в Админку</Link> 
          : null 
        }
      
       {
        tokenUser
        ? <button onClick={() => exit()} className="btn-green-qa btn-green-qa--red" >Выйти</button>
        : <button onClick={toggle} className="btn-green-qa" >Войти</button>
       }
      </div>
      <div className="modal-window">
        <div className="wrapAuth">
        <form className="formAuth" action="">
          <h1 className="formAuth__title">Вход</h1>
          <div className="formAuth__group">
            <input id="formAuth__input--1" type="text"
             autoComplete="off" className="formAuth__input"
              placeholder=" " onChange={(e) => dispath(setLogin(e.target.value)) } value={login}
              name="login"
              />
            <label htmlFor="formAuth__input--1" className="formAuth__label">Login</label>
          </div>
          <div className="formAuth__group">
            <input id="formAuth__input--2" type="password"
              className="formAuth__input" placeholder=" "
              onChange={(e) => dispath(setPass(e.target.value)) } value={pass}
              name="password"
              />
            <label htmlFor="formAuth__input--2" className="formAuth__label">Pass</label>
          </div>
         <Button text="Войти" className="formAuth__btn" />
          <div className="formAuth__wrap-button">
            <Link to={'/feed'}>Зарегистрироваться</Link>
          </div>
        </form>
      </div>
      </div>
  </>
  )
}
export default Registry