import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import ok from '../img/ok-200.png'
import {styleFlexBox} from '../utils/style'
import {useNavigate} from 'react-router-dom'
import {styleH1} from '../utils/style'



function Redirect() {

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
        <Button variant="contained" color="success" size="large" onClick={() => navigate('/')}>
        Продолжить
          </Button>
    </Box>
    </>
  )
}

export default Redirect