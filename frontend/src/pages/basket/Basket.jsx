import React,{useEffect, useRef} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProduct } from '../../store/basketSlice'

import './basket.scss'
import Post from '../../components/Post/Post'

function Basket() {
  
  const {keys,data} = useSelector(state => state.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProduct()) 
  },[])

  return (
    <>
      {data.map((item,index) => (
        <Post item={item} key={index}/>
      ))}
    </>
  )
}
export default Basket