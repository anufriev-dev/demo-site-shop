import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteOneOrder} from '../../store/orderSlice'

import './styles.scss'


function OrderLi({item}) {

  const dispatch = useDispatch()

  const deletePost = (id) => {
    dispatch(deleteOneOrder(id))  
  }

  return (
    <tr className="order__tr">
      <td className="order__td">{item.allArticul}</td>
      <td className="order__td">{item.email}</td>
      <td className="order__td">{item.text}</td>
      <td className="order__td"><button onClick={() => deletePost(item.idorder)} className="order__btn">Удалить</button></td>
    </tr>
  )
}
export default OrderLi