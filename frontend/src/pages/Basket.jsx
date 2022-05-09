import React,{useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProduct,createOrder } from '../store/basketSlice'
import { Link } from 'react-router-dom'
import { setEmail,setTextArea,setCountBasket } from '../store/basketSlice'
import { setBasket } from '../store/basketSlice'

import PostBasket from '../components/PostBasket.jsx'
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import NoGoods from '../components/NoGoods'
import {styleH1} from '../utils/style'
import { styleSpiner } from '../utils/style'


function Basket() {
  
  const {data,textArea,keys,basket, countBasket,email,status} = useSelector(state => state.basket)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(getAllProduct())
  },[keys])

 async function deLete (e) {
    e.preventDefault()
    const self = e.currentTarget
    const relative = self.closest('.post')
    const dataAtt = relative.getAttribute('data-id')
    const data = await JSON.parse(localStorage.getItem(dataAtt))
    const sub = await JSON.parse(localStorage.getItem('basket')) - data.price
    dispatch(setBasket(sub))
    dispatch( setCountBasket(countBasket - 1))
    localStorage.setItem('basket', sub) 
    localStorage.removeItem(dataAtt)

    dispatch(getAllProduct())
  }

  const order =  (e) => {
    e.preventDefault()

    if(email == '') {
      setErrors(true)
    }else {
      setErrors(false)
    }

    const keysHere = Object.keys(localStorage)
    const articulArr =  keysHere.filter(item => item !== 'basket')

    const body2 = new FormData()
    body2.append('email',email)
    body2.append('textArea',textArea)
    body2.append('articul',articulArr)

    dispatch(createOrder(body2))
    // document.location ='/basket/order'
  }
  const [myerrors, setErrors] = useState(false)


  if(status === 'loading') {
    return (
      <div style={styleSpiner}>
        <CircularProgress />
      </div>
     )
  } else{

    return (
    <Container sx={{mb: '4em' }}>
      <div>
        <div >
            <Typography
              variant="h1"
              sx={styleH1}
            >Корзина</Typography>
        </div>
      </div>
      <Grid container spacing={2} sx={{justifyContent: 'center'}}>
        {data.length 
        
        ? data.map((item,index) => (
          <PostBasket deLete={deLete} item={item}  key={index}/>
        ))
        :
          <NoGoods text="Корзина пуста" />
        }
      </Grid>
  
      <div >
        <form action="" method="POST" >
          <h3>Введите свой номер email</h3>
          <TextField fullWidth variant="outlined" error={myerrors} label="email" required  value={email} onChange={e => dispatch(setEmail(e.target.value))} type="text" name="emailBasket" />
          <h3 >Комментарий к заказу</h3>
          <textarea style={{width: '95%',height: '150px',marginBottom: '50px'}} value={textArea} onChange={e => dispatch(setTextArea(e.target.value))} ></textarea>
          <Box sx={{display: 'flex',justifyContent: 'space-between'}}>
            <Button size="large" variant="contained" onClick={order} >Заказать</Button>
            <Box 
             component="span"
             fontSize="2em" 
            >Цена:  {basket}$</Box>
          </Box>
        </form>
      </div>
    </Container>
    )
  }

}
export default Basket