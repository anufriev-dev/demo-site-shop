import React from 'react'
import Basket from './Basket'
import Registry from './Registry'
import { Box } from '@mui/system'
import { LogoDev} from '@mui/icons-material'
import { useLocation, useNavigate} from 'react-router-dom'
import { AppBar, Button, IconButton, Toolbar, Tooltip } from '@mui/material'


const Header = () => {
  
  const navigate = useNavigate()
  const location = useLocation()

  const bool = 
  location.pathname !== '/' &&
  location.pathname !== '/basket/order' &&
  location.pathname !== '/feed/goodreq'
  

  return (
    <>
    <header >
      <AppBar 
        position="static" 
        sx={{mb:'1.5rem'}}
      >
        <Toolbar>
          <Box sx={{flexGrow: 1}}>

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
          { 
            bool
            ? <Button 
                sx={{mr: '1em', ml: '1em'}} 
                onClick={() => navigate(-1)} 
                size="small" 
                color="success" 
                variant="contained" 
                >
                  Назад
              </Button>
            : null
          }
          <Registry />

          <Box 
            sx={{display: {xs: 'none',md: 'block'}}}>
            <Basket />
          </Box>
        </Toolbar>
      </AppBar>
    </header>
    </>
  )
}

export {Header}