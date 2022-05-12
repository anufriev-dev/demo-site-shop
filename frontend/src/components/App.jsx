import {Layout} from './Layout'
import {Error} from './Error.jsx'
import Panel from '../pages/Panel'
import Admin from '../pages/Admin'
import Basket from '../pages/Basket'
import React,{useEffect} from 'react'
import {MainList} from './MainList.jsx'
import {FormReg} from '../pages/FormReg'
import Redirect from '../pages/Redirect'
import { useDispatch } from 'react-redux'
import PanelOrder from '../pages/PanelOrder'
import {Routes,Route} from 'react-router-dom'
import {BrowserRouter} from 'react-router-dom'
import { setKeys } from '../store/basketSlice'
import Description  from '../pages/DescriptionPost'
import RedirectByOrder from '../pages/RedirectByOrder'
import {setCurrent, setLimite} from '../store/mainListSlice'
import {setBasket,setCountBasket} from '../store/basketSlice'


const App = () => {
  
  const dispatch = useDispatch()

  if(!localStorage.getItem('basket')) {
    localStorage.setItem('basket',0)
  }
  if(!localStorage.getItem('currentPage')) {
    localStorage.setItem('currentPage',1)
  }
  if(!localStorage.getItem('limit')) {
    localStorage.setItem('limit',6)
  }

  useEffect(() => {
    const keys = Object.keys(localStorage)
    dispatch(setCountBasket(localStorage.length - 3))
    dispatch(setKeys(keys))
    dispatch(setBasket(JSON.parse(localStorage.getItem('basket'))))
    dispatch(setCurrent(JSON.parse(localStorage.getItem('currentPage'))))
    dispatch(setLimite(JSON.parse(localStorage.getItem('limit'))))
  })

  return (
    <>
    <BrowserRouter>
      <Routes>
          { /* Главная страница */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainList/>}/>
          <Route path="/description/:id" element={<Description />} />
          { /* Страницы регистрации */}
          <Route path="/feed" element={<FormReg />}/>
          <Route path="/feed/goodreq" element={<Redirect />}/>
          {/* Админка */}
          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/panel" element={<Panel />}/>
          <Route path="/admin/order" element={<PanelOrder />} />
          {/* Корзина */}
          <Route path="/basket" element={<Basket />} />
          <Route path="/basket/order" element={<RedirectByOrder />} />
          {/* Редирект */}
          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default  App