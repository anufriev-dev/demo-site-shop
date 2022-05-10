import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteOneOrder} from '../store/orderSlice'
import { Button, TableCell, TableRow } from '@mui/material'



function OrderLi({item}) {

  const dispatch = useDispatch()

  const deletePost = (id) => {
    dispatch(deleteOneOrder(id))  
  }

  return (
    <TableRow >
      <TableCell >{item.allArticul}</TableCell>
      <TableCell >{item.email}</TableCell>
      <TableCell >{item.text}</TableCell>
      <TableCell ><Button onClick={() => deletePost(item.idorder)} >Удалить</Button></TableCell>
    </TableRow>
  )
}
export default OrderLi