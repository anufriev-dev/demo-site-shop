import './FormReg.scss'
import {useSelector,useDispatch} from 'react-redux'
import {setLogin,setPassword,setEmile} from '../../store/registSlice'
import {auth} from '../../store/registSlice'
import { useEffect } from 'react'

function FormReg () {
  const {login,password,emile} = useSelector(state => state.reg)
  const dispath = useDispatch()

  useEffect(() => {
    document.querySelector('.FormReg__btn').addEventListener('click', sub)
  }, [])
  function sub(e) {
    e.preventDefault()
    dispath(auth())
  }
  return (
    <>
      <div className="wfdiv"></div>
        <div className="containerMy">
          <form className="form-reg" action="" method="post">
            <h1 className="form-reg__title">Регистрация</h1>

            <div className="FormReg__child child">
              <label className="child__lable" htmlFor="">Логин</label>
              <input value={login} 
              onChange={e => dispath(setLogin(e.target.value))} 
              id="formRg-name" className="child__input" 
              type="text" name="login"
              />
            </div>

            <div className="FormReg__child child">
              <label className="child__lable" htmlFor="">Е-mail</label>
              <input value={emile} 
              onChange={e => dispath(setEmile(e.target.value))} 
              id="formRg-email" className="child__input" 
              type="text" name="emile"
              />
            </div>

            <div className="FormReg__child child">
              <label className="child__lable" htmlFor="">Пароль</label>
              <input value={password} 
              onChange={e => dispath(setPassword(e.target.value))} 
              id="formRg-pass" className="child__input" 
              type="text" name="password"
              />
            </div>
            <hr className="FormReg__hr" />
            <button className="FormReg__btn">Зарегистрироваться</button>
          </form>
        </div>
      </>
  )
}
export {FormReg}