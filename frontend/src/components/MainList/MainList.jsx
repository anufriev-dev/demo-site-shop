import React, {useEffect} from 'react'
import Post from '../Post/Post'
import { useSelector,useDispatch } from 'react-redux'
import {setCurrent} from '../../store/mainListSlice'
import { getProduct,setStore,setLimite,setSerch, } from '../../store/mainListSlice'
import { createPages } from '../../script/createPage'
import {setBasket} from '../../store/basketSlice'

import './MainList.scss'



function MainList () {

  const {error,store,serch,status,limit,currentPage,countPage,kastilCount} = useSelector(state => state.mainList)

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
        el.querySelector('.btn-post').disabled = true
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

  function btnEvent (e)  {
    const self = e.currentTarget
    const post = self.closest('.post')
    const price = parseInt(post.querySelector('.post__price').textContent) // price
    const sum = (Number(JSON.parse(localStorage.getItem('basket')) + price))
    localStorage.setItem('basket', JSON.stringify(sum))
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

  const filterStore = store.filter((item,index) => {
    return item.title.toLowerCase().includes(serch.toLowerCase())  
    }
  )

  if(store === undefined) {
    return (
      <h1>Загрузка</h1>
    )
  }
  return (
    <div className="containerMy">
      <div className="title-list">
          <h1 >Продукты </h1>
          <select onChange={e => dispatch(setLimite(e.target.value))}>
            <option value="0" disabled>Лимит</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
      </div>
      <div className="wrapInput-serch">
          <label htmlFor="input23">Поиск товара</label>
          <input onChange={e => dispatch(setSerch(e.target.value))} id="input23" className="wrapInput-serch__input" type="text" />
      </div>
      <div className="sort-mainList">
        <h3>Сортировать по:</h3>
        <span onClick={sortHi} className="sort-mainList__span">возрастанию</span>
        <span onClick={sortLow} className="sort-mainList__span">убыванию</span>
      </div>
      <div className="pageML">
        {pages.map((page,index) => <span key={index} 
        className={currentPage === page ? 'current-pageML' :'pagesML'}
        onClick={() => dispatch(setCurrent(page))} >{page}</span>)}
      </div>

      {status === 'loading' && <h2 style={{position: 'absolute'}}>Загрузка</h2>}
      {error && <h2>{error}</h2>}

      <div className="main-container">

      {filterStore.map(item => (
        <Post item={item} text="BUY NOW" key={item.productid}/>
      ))}
      
      </div>
    </div>
  )
}

export {MainList}