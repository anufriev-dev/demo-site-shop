import MyBadge from './MyBabge'
import {Header} from './Header'
import {useEffect} from 'react'
import React, { useState } from 'react'
import { Home } from '@mui/icons-material'
import {Outlet, useLocation, useNavigate} from 'react-router-dom'
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'


const Layout = () => {
  
  const location = useLocation()

  const bool= 
  location.pathname === '/' ||
  location.pathname === '/basket'

  const [value,setValue] = useState('/')
  const navigate = useNavigate()


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
      {/* Все промежутачные страницы */}
      <main style={{marginBottom: '100px'}}>
        <Outlet/>
      </main>
      {/* Мобильная навигация */}
      { 
        bool
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
                icon={<MyBadge /> }
              />
          </BottomNavigation> 
        </Paper>
      : null
      }
    </>
  )
}

export {Layout}