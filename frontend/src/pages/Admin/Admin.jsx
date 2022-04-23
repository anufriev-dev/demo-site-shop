import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <>
      Админка
      <Link to="/admin/panel">Посты</Link>
      <Link to="/">Назад</Link>
    </>
  )
}

export default Admin