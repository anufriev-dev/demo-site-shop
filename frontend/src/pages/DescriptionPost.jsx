import { 
        Button,
        Card,
        CardActions,
        CardContent, 
        CardMedia, 
        CircularProgress, 
        Container, 
        Rating,  
        Typography 
} from '@mui/material'
import { Box } from '@mui/system'
import React,{useEffect} from 'react'
import {styleH1} from '../utils/style'
import {styleSpiner} from '../utils/style'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { setCountBasket} from '../store/basketSlice'
import {getOnePostById} from '../store/descPostSlice'


const DescriptionPost = () => {
  
  const {id} = useParams()
  const {status,post} = useSelector(state => state.descPost)
  const {countBasket} = useSelector(state => state.basket)


  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getOnePostById(id))
  },[])

  const addProduct = (e,item) => {
    const valid = JSON.parse(localStorage.getItem(item.articul))
    if(valid === null) {
      const self = e.currentTarget
      localStorage.setItem(item.articul ,JSON.stringify(item))
      dispatch( setCountBasket(countBasket + 1))
      self.disabled = true
    }else{
      alert('Товар уже находится в вашей корзине')
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
    <Container>
      {[...post].map(item => (
        <div key={item.productid}>
          <Typography 
            variant="h1"
            sx={{...styleH1,mb: '0.5em'}}
          >
            {item.title}
          </Typography>
          <Card>
            <Box sx={{display: 'flex',justifyContent:'center',alignItems: 'center'}}>
              <CardMedia 
                component="img" 
                sx={{width: {xs: '325px',sm: '550px'}}} 
                src={`${process.env.SERVER_API_URL}/${item.img}`}
              />
            </Box>
            <CardContent>
              <Typography component="legend">Rating</Typography>
              <Rating readOnly  value={item.rating} />
              <Box sx={{mb:'0.5em',mt: '0.5em'}}>
                <label>Цена:&nbsp;&nbsp;</label>
                <Box component="span"><b>${item.price}</b></Box>
              </Box>
            </CardContent>
            <CardActions>
              <Button size="large" onClick={(e) => addProduct(e,item)} >BUY NOW</Button>
            </CardActions>
          </Card>

          <Card sx={{mt: '2em', mb: '2em'}}>
            <CardContent >
            <h2>Описание</h2>
              <div>{item.descpost}</div>  
            </CardContent>

          </Card>

        </div>
      ))}
    </Container>
  )
}

export default DescriptionPost