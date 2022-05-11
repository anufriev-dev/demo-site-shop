import React, {useEffect, useState} from 'react'
import Post from './Post'
import { useSelector,useDispatch } from 'react-redux'
import {setCurrent} from '../store/mainListSlice'
import { getProduct,setStore,setLimite,setSerch, } from '../store/mainListSlice'
import { createPages } from '../script/createPage'
import {setBasket, setCountBasket} from '../store/basketSlice'
import { Box, Container, TextField, Button, Stack, ButtonGroup, Pagination, Grid, CircularProgress } from '@mui/material'
import SelectHeader from './SelectHeader'
import Snack from './Snack'
import { styleSpiner } from '../utils/style'

import NoGoods from './NoGoods'

function MainList () {

  const {error,store,serch,status,limit,currentPage,countPage,kastilCount} = useSelector(state => state.mainList)
  const {countBasket} = useSelector(state => state.basket)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct())
  },[])

  useEffect(() => {
    const startIndex = (Number(currentPage) - 1) * Number(limit)
    const endIndex = Number(currentPage) * Number(limit)
    setFilterStore([...store].slice(startIndex,endIndex))
  },[currentPage,limit,store])

  useEffect(() => {
    let finaly = store.filter((item) => {
      return item.title.toString().toLowerCase().includes(serch.trim().toLowerCase())  
    })

    const startIndex = (Number(currentPage) - 1) * Number(limit)
    const endIndex = Number(currentPage) * Number(limit)
  
    if(serch === '') {
      finaly = [...finaly].slice(startIndex,endIndex)
    }

    setFilterStore(finaly)
  },[serch,currentPage,limit,store])


  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  function btnEvent (e,item)  {
    const valid = JSON.parse(localStorage.getItem(item.articul))
    if(valid === null) {
      setOpen(true)
      const self = e.currentTarget
      const post = self.closest('.post')
      const price = parseInt(post.querySelector('.post__price').textContent) // price
      const sum = (Number(JSON.parse(localStorage.getItem('basket')) + price))
      localStorage.setItem('basket', JSON.stringify(sum))
      dispatch( setCountBasket(countBasket + 1))
      dispatch(setBasket(sum))
      const img = post.querySelector('.post__img').getAttribute('src')//image
      const title = post.querySelector('.post__desc').textContent //text
      const articul = post.getAttribute('data-id')
      const item = {
        articul: articul,
        img:img,
        title:title,
        price:price
      }
      localStorage.setItem(articul,JSON.stringify(item))
      self.disabled = true
    }else {
      alert('Товар уже находится в вашей корзине')
    }
  }
  
  /* Поиск, сортировка , постраничная навигация */
  const [filterStore, setFilterStore] =  useState([]) 

  const sortHi =  () => {
    const result = [...store].sort((a,b) => {
     return parseFloat(a.price) - parseFloat(b.price)
    })
    dispatch(setStore(result))
    document.getElementById('input23').value = ''
  }
  const sortLow =  () => {
    const result = [ ...store].sort((a,b) => {
      return parseFloat(b.price) - parseFloat(a.price)
    })
    dispatch(setStore(result))
    document.getElementById('input23').value = ''
  }

  const pagination = (e,value) => {
    dispatch(setCurrent(value))
    if(typeof Number(value) === 'number') {
      localStorage.setItem('currentPage',JSON.stringify(value) )
    }
    const startIndex = (Number(value) - 1) * Number(limit)
    const endIndex = Number(value) * Number(limit)
    const result = [...store].slice(startIndex,endIndex)
    setFilterStore(result)
  }



  if(status === 'loading') {
    return (
     <div style={styleSpiner}>
       <CircularProgress />
     </div>
    )
  }
  return (
    <Container >
      <SelectHeader />
      <div>
          <TextField 
          label="Поиск"
          variant="outlined"
          color="success" 
          onChange={e => dispatch(setSerch(e.target.value))} 
          id="input23"type="text"
          fullWidth
          sx={{mb: '1.5rem',mt: '1.5rem'}}
          />
      </div>
      <Box sx={{mb:'1.5rem'}}>
        <h3>Сортировать цену по:</h3>
        <ButtonGroup size="small" variant="contained" color="success">
          <Button onClick={sortHi} >возрастанию</Button>
          <Button onClick={sortLow} >убыванию</Button>
        </ButtonGroup>
      </Box>

      <Box sx={{mb:'2rem'}}>
        <Stack>
          <Pagination onChange={(e,v) => pagination(e,v)} page={parseInt(currentPage)}  count={10} />
        </Stack>
      </Box>

      {error && <h2>{error}</h2>}

      <Grid container spacing={2}  sx={{justifyContent: 'center'}}>
        {filterStore.length 
        ? filterStore.map(item => (
          <Post btnEvent={btnEvent} item={item} text="BUY NOW" key={item.productid}/>
        ))
        :
        <NoGoods text="Товары не найдены"/>
      }
      </Grid>
      <Box sx={{mt:'2rem', mb: '2em'}}>
        <Stack>
          <Pagination  onChange={(e,v) => pagination(e,v)} page={parseInt(currentPage)}  count={10} />
        </Stack>
      </Box>
      <Snack open={open} close={handleClose}/>
    </Container>
  )
}

export {MainList}