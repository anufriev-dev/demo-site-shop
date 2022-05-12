import React from 'react'
import ok from '../assets/ok-200.png'
import {styleH1} from '../utils/style'
import {styleFlexBox} from '../utils/style'
import {useNavigate} from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'


const Redirect = () => {

  const navigate = useNavigate()

  return (
    <>
    <Box sx={styleFlexBox}>
      <img  src={ok} alt="" width="100" height="100"/>
      <Typography
        variant="h1"
        sx={{...styleH1, mb: '0.5em',textAlign: 'center'}}
      >
        Вы успешно зарегистрировались!
      </Typography>
      <Typography
        variant="body1"
        sx={{textAlign: 'center',mb: '1em'}}
      >
        Теперь вы можете совершать покупки в нашем маркете.
        </Typography>
        <Button 
          variant="contained" 
          color="success" 
          size="large" 
          onClick={() => navigate('/')}
        >
          Продолжить
          </Button>
    </Box>
    </>
  )
}

export default Redirect