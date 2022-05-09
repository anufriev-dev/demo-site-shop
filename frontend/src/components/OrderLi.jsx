import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteOneOrder} from '../store/orderSlice'



function OrderLi({item}) {

  const dispatch = useDispatch()

  const deletePost = (id) => {
    dispatch(deleteOneOrder(id))  
  }

  return (
    <tr >
      <td >{item.allArticul}</td>
      <td >{item.email}</td>
      <td >{item.text}</td>
      <td ><button onClick={() => deletePost(item.idorder)} >Удалить</button></td>
    </tr>
  )
}
export default OrderLi