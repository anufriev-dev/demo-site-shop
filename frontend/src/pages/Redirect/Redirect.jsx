import React from 'react'
import './redirect.scss'
import {Link} from 'react-router-dom'

function Redirect() {
  return (
    <>
      <h1>Вы успешно зарегистрировались</h1>
      <Link to="/">На главную</Link>
    </>
  )
}

export default Redirect