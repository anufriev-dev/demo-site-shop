import React, {useEffect} from 'react'
import Post from '../Post/Post'
import { useSelector,useDispatch } from 'react-redux'
import {setCurrent} from '../../store/mainListSlice'
import { getProduct } from '../../store/mainListSlice'
import { createPages } from '../../script/createPage'
import {setBasket,setBasketItem} from '../../store/basketSlice'

import './MainList.scss'



function MainList () {

  const {error,store,status,limit,currentPage,countPage} = useSelector(state => state.mainList)
  const {basketItem} = useSelector(state => state.basket)
  const dispatch = useDispatch()
  const pages = []
  createPages(pages,countPage,currentPage)

  useEffect(() => {
    dispatch(getProduct())
  },[currentPage])

  useEffect(() => {
    let keys = Object.keys(localStorage)
    const collectionBtn = document.querySelectorAll('.post')
    collectionBtn.forEach(el => {
      if(keys.includes(el.getAttribute('data-id'))) {
        el.querySelector('.btn-post').disabled = true
      }
    })
  })


  useEffect(() => {
    const collectionBtn = document.querySelectorAll('.btn-post')
    collectionBtn.forEach(el => {
      el.addEventListener('click',(e) => {
        const self = e.currentTarget
        const post = self.closest('.post')
        const price = parseInt(post.querySelector('.post__price').textContent) // price
        dispatch(setBasket(price))
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
      })  
    })
  })


  return (
    <div className="containerMy">

      <h1 >Продукты </h1>
      <div className="pageML">
        {pages.map((page,index) => <span key={index} 
        className={currentPage === page ? 'current-pageML' :'pagesML'}
        onClick={() => dispatch(setCurrent(page))} >{page}</span>)}
      </div>

      {status === 'loading' && <h2 style={{position: 'absolute'}}>Загрузка</h2>}
      {error && <h2>{error}</h2>}

      <div className="main-container">

      {store.map(item => (
      <Post item={item} key={item.productid}/>
      ))}
      
      </div>
    </div>
  )
}

export {MainList}