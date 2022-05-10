import React,{useEffect} from 'react'
import {getAllOrder} from '../store/orderSlice'
import {useDispatch, useSelector} from 'react-redux'
import OrderLi from '../components/OrderLi'
import {Link} from 'react-router-dom'
import {Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'
import {styleH1} from '../utils/style'

function PanelOrder() {
  const {data,message} = useSelector(state => state.orderslice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllOrder())
  },[message])

  if(data === undefined) {
    return (
      <h1>Загрузка...</h1>
    )
  }
  return (
    <Container >
      <Typography 
        variant="h1"
        sx={{...styleH1, mb: '1em'}}
      >Заказы</Typography>
    <TableContainer  >
      <Table  >
        <TableHead>
          <TableRow >
            <TableCell ><h2>allArticul</h2></TableCell>
            <TableCell ><h2>email</h2></TableCell>
            <TableCell ><h2>text</h2></TableCell>
            <TableCell ><h2>Настройки</h2></TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {data.map((item,index) => (
        <OrderLi item={item} key={index} />
      ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default PanelOrder