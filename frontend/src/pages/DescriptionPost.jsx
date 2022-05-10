import { CircularProgress, Container, Rating } from '@mui/material'
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getOnePostById} from '../store/descPostSlice'

function DescriptionPost() {
  const {id} = useParams()
  const {status,post} = useSelector(state => state.descPost)

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getOnePostById(id))
  }, [])

  if(status === 'loading') {
    return <CircularProgress />
  }
  return (
    <Container>
      {[...post].map(item => (
        <div key={item.productid}>
          <div >{item.title}</div>
          <img src={`http://localhost:4000/${item.img}`}/>
          <div>${item.price}</div>
          <Rating readOnly  value={item.rating} />
          <h1>Описание</h1>
          <div>{item.descpost}</div>
        </div>
      ))}
    </Container>
  )
}

export default DescriptionPost
