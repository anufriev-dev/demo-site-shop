import React from 'react'
import { Button } from '@mui/material'
import error from '../assets/error.png'
import { useNavigate } from 'react-router-dom'


const Error = () => {

  const navigate = useNavigate()

  return (
    <div style={{
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <img src={error} alt="" width="100" height="100" />
      <h1 className="h1_404">404</h1>
      <p style={{fontSize: '25px'}}>Страница не найдена!</p>
      <Button color="error" onClick={() => navigate('/')}  >На главную</Button>
    </div>
  )
}

export {Error}