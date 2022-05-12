import React from 'react'
import { Box } from '@mui/system'
import ok from '../assets/ok-200.png'
import {styleH1} from '../utils/style'
import {styleFlexBox} from '../utils/style'
import {useNavigate} from 'react-router-dom'
import { Button, Typography } from '@mui/material'


const RedirectByOrder = () => {

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