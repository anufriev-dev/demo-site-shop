import React from 'react'
import {styleH1} from '../utils/style'
import {auth} from '../store/registSlice'
import {useSelector,useDispatch} from 'react-redux'
import {setLogin,setPassword,setEmile} from '../store/registSlice'
import { Box, Button, Container, TextField, Typography } from '@mui/material'


const FormReg = () => {
  
  const {login,password,emile} = useSelector(state => state.reg)
  const dispath = useDispatch()

  const sub = (e) => {
    e.preventDefault()
    dispath(auth())
  }

  return (
    <>
    <Container >
      <form  action="" method="post">
        <Typography 
         variant="h1"
         sx={{...styleH1 ,mb:'1em'}} 
        >
          Регистрация 
        </Typography>
        <Box sx={{mb: '1em'}}>
          <TextField fullWidth label="Логин" variant="outlined" required color="primary" value={login} 
          onChange={e => dispath(setLogin(e.target.value))} 
          id="formRg-name" 
          type="text" name="login"
          />
        </Box>

        <Box sx={{mb: '1em'}}>

          <TextField fullWidth label="Е-mail" variant="outlined" required color="warning" value={emile} 
          onChange={e => dispath(setEmile(e.target.value))} 
          id="formRg-email"  
          type="text" name="emile"
          />
        </Box>

        <Box sx={{mb: '1em'}}>
          <TextField fullWidth label="Пароль" variant="outlined" required color="success" value={password} 
          onChange={e => dispath(setPassword(e.target.value))} 
          id="formRg-pass"
          type="text" name="password"
          />
        </Box>
        <Box sx={{mt: '2em'}}>
          <Button variant="contained" size="large" onClick={(e) => sub(e)}>Зарегистрироваться</Button>
        </Box>
      </form>
    </Container>
      </>
  )
}

export {FormReg}