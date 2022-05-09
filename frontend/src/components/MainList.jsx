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
  const pages = []
  createPages(pages,countPage,currentPage)

  useEffect(() => {
    dispatch(getProduct())
  },[limit,currentPage,kastilCount])

  useEffect(() => {
    const keys = Object.keys(localStorage)
    const collectionBtn = document.querySelectorAll('.post')
    collectionBtn.forEach(el => {
      if(keys.includes(el.getAttribute('data-id'))) {
       console.log('Дисейбл')
      }
    })
  })

  useEffect(() => {
    const collectionBtn = document.querySelectorAll('.btn-post')
    collectionBtn.forEach(el => {
      el.addEventListener('click', btnEvent)  
    })
    return function () {
      collectionBtn.forEach(el => {
        el.removeEventListener('click', btnEvent)
      })
    }
  })
  

  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  function btnEvent (e)  {
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
    // document.location.reload()
  }

  const sortHi = async () => {

    const result = await [...store].sort((a,b) => {
     return parseFloat(a.price) - parseFloat(b.price)
    })
    dispatch(setStore(result))
  }
  const sortLow = async () => {
    const result = await [...store].sort((a,b) => {
      return parseFloat(b.price) - parseFloat(a.price)
    })
    dispatch(setStore(result))
  }

  const filterStore = store.filter((item) => {
    return item.title.toLowerCase().includes(serch.toLowerCase())  
    }
  )
  const pagination = (e) => {
    const currentCount = e.target.textContent
    dispatch(setCurrent(currentCount))
    if(typeof Number(currentCount) === 'number') {
      localStorage.setItem('currentPage',JSON.stringify(currentCount) )
    }
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
          <Pagination page={parseInt(currentPage)} onClick={(e) => pagination(e) } count={10} />
        </Stack>
      </Box>

      {error && <h2>{error}</h2>}

      <Grid container spacing={2}  sx={{justifyContent: 'center'}}>
        {filterStore.length 
        ? filterStore.map(item => (
          <Post item={item} text="BUY NOW" key={item.productid}/>
        ))
        :
        <NoGoods text="Товары не найдены"/>
      }
      </Grid>
      <Box sx={{mt:'2rem', mb: '2em'}}>
        <Stack>
          <Pagination page={parseInt(currentPage)} onClick={(e) => pagination(e)} count={10} />
        </Stack>
      </Box>
      <Snack open={open} close={handleClose}/>
    </Container>
  )
}

export {MainList}