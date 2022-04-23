import React from 'react'
import './redirect.scss'
import {Link} from 'react-router-dom'
import ok from '../../img/ok-200.png'

function Redirect() {
  return (
    <>
    <div className="container redirect">
      <img className="redirect__logo" src={ok} alt="" width="100" height="100"/>
      <h1>Вы успешно зарегистрировались!</h1>
      <p>Теперь вы можете совершать покупки в нашем маркете.</p>
      <Link className="redirect__link" to="/">
        Продолжить
      </Link>
    </div>
    </>
  )
}

export default Redirect