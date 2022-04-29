import React from 'react'
import { Link } from 'react-router-dom'
import './admin.scss'

function Admin() {
  return (
    <div className="containerMy">
      <h1>Админка</h1>
      <div className="postBlockAdmin">
        <h1>Посты с товарами</h1>
        <p className="postBlockAdmin__text">
          Здесь вы сможете редактировать просты с товарами, а именно: удалять, обновлять, добавлять</p>
        <Link className="link-adminka" to="/admin/panel">Посты</Link>
      </div>
      <div className="main-adminka">
        <Link className="Link" to="/">Назад</Link>
      </div>
    </div>
  )
}

export default Admin