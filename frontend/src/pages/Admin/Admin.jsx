import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import './admin.scss'

const textPost = 'Здесь вы сможете редактировать просты с товарами, а именно: удалять, обновлять, добавлять'
const textOrders = 'Здесь расположены заказы клиентов'

function Admin() {
  return (
    <div className="containerMy">
      <h1>Админка</h1>
      <div className="wrapAd">
        <Card title={'Посты с товарами'} text={textPost} btn={'Посты'} link={'/admin/panel'} />
        <Card title={'Заказы'} text={textOrders} btn={'Перейти'} link={'/admin/order'} />
      </div>
      <div className="main-adminka">
        <Link className="Link" to="/">Назад</Link>
      </div>
    </div>
  )
}

export default Admin