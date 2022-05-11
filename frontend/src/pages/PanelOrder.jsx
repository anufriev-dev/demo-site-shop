import React,{useEffect, useState} from 'react'
import {getAllOrder} from '../store/orderSlice'
import {useDispatch, useSelector} from 'react-redux'
import OrderLi from '../components/OrderLi'
import {Link} from 'react-router-dom'
import {CircularProgress, Container, NativeSelect, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography} from '@mui/material'
import {styleH1, styleSpiner} from '../utils/style'
import {setSerch} from '../store/orderSlice'

function PanelOrder() {
  const {data,message,serch,status} = useSelector(state => state.orderslice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllOrder())
  },[message,dispatch])

  /* Поиск */
  const [valueSch, setValueSch] = useState('1')

  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    setFilterData([...data]?.filter((item) => {
      switch(valueSch){
        case '1':
          return item.email.toLowerCase().includes(serch.trim().toLowerCase())
        case '2':
          return item.text.toString().toLowerCase().includes(serch.trim().toLowerCase())
        case '3':
          return item.allArticul.toString().toLowerCase().includes(serch.trim().toLowerCase())
      }
    }))
  },[serch,data,valueSch])
  
  if(status === 'loading') {
    return (
      <div style={styleSpiner}>
        <CircularProgress />
      </div>
     )
  }
  return (
    <Container >
      <Typography 
        variant="h1"
        sx={{...styleH1, mb: '1em'}}
      >Заказы</Typography>
      <label style={{marginRight: '1em'}}>Искать по</label>
      <NativeSelect onChange={(e) => setValueSch(e.target.value)} value={valueSch} sx={{mb:'2em'}}>
        <option value={1}>Email</option>
        <option value={2}>Описанию</option>
        <option value={3}>Артиклу</option>
      </NativeSelect>
      <TextField fullWidth onChange={(e) => dispatch(setSerch(e.target.value)) } label="Поиск" color="success" variant="filled" />
    <TableContainer  >
      <Table  >
        <TableHead>
          <TableRow >
            <TableCell ><h2>Артикул</h2></TableCell>
            <TableCell ><h2>Email</h2></TableCell>
            <TableCell ><h2>Описание</h2></TableCell>
            <TableCell ><h2>Настройки</h2></TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {filterData
           ?filterData.map((item,index) => (
                <OrderLi item={item} key={index} />
            ))
           : null
          }
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default PanelOrder