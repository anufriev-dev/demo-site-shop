import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import ok from '../img/ok-200.png'
import {styleH1} from '../utils/style'
import {useNavigate} from 'react-router-dom'
import {styleFlexBox} from '../utils/style'


function RedirectByOrder() {

  const navigate = useNavigate()

  return (
    <>
      <Box sx={styleFlexBox}>
      <img  src={ok} alt="" width="100" height="100"/>
      <Typography 
        variant="h1"
        sx={{...styleH1, mb: '0.5em' }}
      >
        Спасибо за покупку
      </Typography>

      <Typography 
        variant="body1"
        sx={{textAlign: 'center',mb: '1em'}}
      >
        В ближайшее время вы вышлшем письмо на ваш эл. адрес</Typography>
      <Button variant="contained" color="success" size="large" onClick={() => navigate('/')}>
        Продолжить
      </Button>
    </Box>
    </>
  )
}

export default RedirectByOrder