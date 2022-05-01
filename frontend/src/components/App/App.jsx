import {Routes,Route} from 'react-router-dom'

import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Layout} from '../Layout/Layout'
import {Error} from '../Error/Error.jsx'
import {Params} from '../../pages/Params/Params.jsx' 
import {MainList} from '../MainList/MainList.jsx'
import {FormReg} from '../../pages/FormReg/FormReg'
import {BrowserRouter} from 'react-router-dom'
import Redirect from '../../pages/Redirect/Redirect'
import Panel from '../../pages/Panel/Panel'
import Admin from '../../pages/Admin/Admin'
import Basket from '../../pages/basket/Basket'
import { setKeys } from '../../store/basketSlice'
import RedirectByOrder from '../../pages/redirectByOrder/RedirectByOrder'
import PanelOrder from '../../pages/PanelOrder/PanelOrder'
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
        </Route>
        { /* Страница регистрации */}
        <Route path="/feed">
          <Route index element={<FormReg />}/>
          <Route path=":goodreq" element={<Redirect />}/>
          <Route path=":auth" element={<Params />} />

        </Route>
        {/* Страница Api*/}
        <Route path="/auth/api">
          <Route index element={<></>} />
        </Route>
        {/* Админка */}
        <Route path="/admin">
          <Route index  element={<Admin />}/>
          <Route path="panel" element={<Panel />}/>
          <Route path="order" element={<PanelOrder />} />
        </Route>
        <Route path="/basket">
          <Route index element={<Basket />} />
          <Route path=":order" element={<RedirectByOrder />} />
        </Route>
        <Route path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default  App