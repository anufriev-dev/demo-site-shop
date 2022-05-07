import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'
import ok from '../../img/ok-200.png'

function RedirectByOrder() {
  return (
    <>
      <div className="containerMy redirect">
      <img className="redirect__logo" src={ok} alt="" width="100" height="100"/>
      <h1>Спасибо за покупку</h1>
      <p>В ближайшее время вы вышлшем письмо на ваш эл. адрес</p>
      <Link className="redirect__link" to="/">
        Продолжить
      </Link>
    </div>
    </>
  )
}

export default RedirectByOrder