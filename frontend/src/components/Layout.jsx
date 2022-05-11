import React, { useState } from 'react'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'

import {useEffect} from 'react'
import {Header} from './Header'
import {Footer} from './Footer'
import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import { Box } from '@mui/system'
import { Home, ShoppingBasket } from '@mui/icons-material'
import Basket from './Basket'
import { useSelector } from 'react-redux'
import MyBadge from './MyBabge'

function Layout () {




  const [value,setValue] = useState('/')
  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = (event,newEvent) => {
    setValue(newEvent)
    navigate(newEvent)
  }

  useEffect(() => {
    setValue(location.pathname)
  },[location])

  return (
    <>
    <Header />
    <main style={{marginBottom: '100px'}}>
      <Outlet/>
    </main>
    { location.pathname === '/' || location.pathname === '/basket'
    
    ? <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display:{md:'none'} }} >
      <BottomNavigation  value={value} onChange={handleChange} >
          <BottomNavigationAction 
            label="Главная"
            value={'/'}
            icon={<Home/>}
          />
          <BottomNavigationAction 
            label="Корзина"
            value={'/basket'}
            disabled={location.pathname == '/basket' ? true : false} 
            icon={<MyBadge /> } //<Basket/>
          />
      </BottomNavigation> 
    </Paper>
    : null
    }
    {/* <Footer /> */}
    </>
  )
}
export {Layout}

