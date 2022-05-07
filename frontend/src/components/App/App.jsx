import React,{useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {Layout} from '../layout/Layout'
import {Error} from '../error/Error.jsx'
import {MainList} from '../mainList/MainList.jsx'
import {FormReg} from '../../pages/formReg/FormReg'
import {BrowserRouter} from 'react-router-dom'
import Redirect from '../../pages/redirect/Redirect'
import Panel from '../../pages/panel/Panel'
import Admin from '../../pages/admin/Admin'
import Basket from '../../pages/basket/Basket'
import { setKeys } from '../../store/basketSlice'
import RedirectByOrder from '../../pages/redirectByOrder/RedirectByOrder'
import PanelOrder from '../../pages/panelOrder/PanelOrder'
import {setBasket} from '../../store/basketSlice'


function App () {
  const dispatch = useDispatch()

  if(!localStorage.getItem('basket')) {
    localStorage.setItem('basket',0)
  }

  useEffect(() => {
    const keys = Object.keys(localStorage)
    dispatch(setKeys(keys))
    dispatch(setBasket(JSON.parse(localStorage.getItem('basket'))))
  })

  return (
    <>
    <BrowserRouter>
      <Routes>
          { /* Главная страница */}
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainList/>}/>
          <Route path="/basket" element={<Basket />} />
        </Route>
          { /* Страницы регистрации */}
          <Route path="/feed" element={<FormReg />}/>
          <Route path="/feed/goodreq" element={<Redirect />}/>
          {/* Админка */}

          <Route path="/admin" element={<Admin />}/>
          <Route path="/admin/panel" element={<Panel />}/>
          <Route path="/admin/order" element={<PanelOrder />} />


          {/* Корзина */}
          <Route path="/basket/order" element={<RedirectByOrder />} />
          <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default  App