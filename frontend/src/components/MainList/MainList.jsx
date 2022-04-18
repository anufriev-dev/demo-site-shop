import React, {useEffect,useState} from 'react';
import Post from '../Post/Post';
import { useSelector,useDispatch } from 'react-redux';
import {setCurrent} from '../../store/mainListSlice'
import { getProduct } from '../../store/mainListSlice';
import { createPages } from '../../script/createPage';

import './MainList.scss';



function MainList () {

  const {error,store,status,limit,currentPage,countPage} = useSelector(state => state.mainList)
  const dispatch = useDispatch()
  const pages = []
  createPages(pages,countPage,currentPage)

  useEffect(() => {
    // если мы хотим передовать в асинхронную функцию redux'а параметры
    // то это всегда обьект или массив параметров, 1
    dispatch(getProduct([currentPage,limit]))
  },[currentPage])

  return (
    <div className='container'>
      <h1 >Продукты </h1>
      <div className='pageML'>
        
        {pages.map((page,index) => <span key={index} 
        className={currentPage == page ? "current-pageML" :"pagesML"}
        onClick={() => dispatch(setCurrent(page))} >{page}</span>)}
      </div>

      {status == 'loading' && <h2 style={{position: 'absolute'}}>Загрузка</h2>}
      {error && <h2>{error}</h2>}

      <div className='main-container'>

      {store.map(item => (
      <Post item={item} key={item.productid}/>
      ))}
      
      </div>
    </div>
  );
}

export {MainList};