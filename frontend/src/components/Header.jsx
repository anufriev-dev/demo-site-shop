import React from 'react'
import Registry from './Registry'
import {useSelector} from 'react-redux'
import {Nav} from './Nav'
import Logo from '../img/logo.png'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { AppBar, Badge, Button, Container, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import {ShoppingBasket, LogoDev} from '@mui/icons-material'
import { Box } from '@mui/system'
import Basket from './Basket'


function Header () {


  const {basket,countBasket} = useSelector(state => state.basket)
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
    <header >
      <AppBar position="static" sx={{mb:'1.5rem'}}>
        <Toolbar>
          <Box 
          sx={{flexGrow: 1}}>   
          <Tooltip title="На главную">
            <IconButton
            sx={{mr: '1em', ml: '1em'}}
            color="inherit" 
            onClick={() => navigate('/')}
            >
              <LogoDev fontSize="large" />

            </IconButton>
            </Tooltip>         
          </Box>
          {location.pathname !== '/' && location.pathname !== '/basket/order' && location.pathname !== '/feed/goodreq'
          ? <Button sx={{mr: '1em', ml: '1em'}} onClick={() => navigate(-1)} size="small" color="success" variant="contained" >Назад</Button>  
          :  null}
          <Registry />

          <Box sx={{display: {xs: 'none',md: 'block'}}}>
            <Basket />
          </Box>

        {/* <Nav /> */}
        </Toolbar>
      </AppBar>
    </header>
    </>
  )
}
export {Header}