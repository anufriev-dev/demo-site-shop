import { Box } from '@mui/system'
import React,{useState } from 'react'
import { styleModal } from '../utils/style'
import { authariz } from '../store/authSlice'
import { Home, Logout } from '@mui/icons-material'
import {useSelector,useDispatch} from 'react-redux'
import {useLocation,useNavigate} from 'react-router-dom'
import {setLogin,setPass} from '../store/authSlice'
import { Button, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material'


const Registry = () => {

  const {login,pass} = useSelector(state => state.auth)
  const location = useLocation()

  const dispath = useDispatch()
  const navigate = useNavigate()

  const tokenUser = document.cookie.includes('user=')
  const tokenRole = document.cookie.includes('role=ADMIN')

  const sub = (e) => {
    e.preventDefault()
    dispath( authariz())
    setOpen(false)
  }

  function exit () {
    window.cookieStore.delete('user')
    window.cookieStore.delete('role')
    localStorage.clear()
    navigate('/')

  }
  const [open,setOpen] = useState(false)

  return(
  <>
    <div className="registry">
      {
        tokenRole

        ? <Tooltip title="Админка">
            <span>
            <IconButton 
                sx={{mr: 2}} disabled={location.pathname == '/admin' ? true : false}
                variant="contained" onClick={() => navigate('/admin')}
                color="inherit" 
              >
                <Home />
              </IconButton> 
            </span>
          </Tooltip> 
          
        : null 
      }
    </div>
    <div>
      {
      tokenUser  

      ? <Tooltip title="Выйти">
          <IconButton
          variant="contained" 
          color="error"
          onClick={() => exit()}
          >
            <Logout />
          </IconButton>
        </Tooltip>

      : <Button size="small" onClick={() => setOpen(true)} variant="contained">Войти</Button>
      }
    </div>
    <Modal
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box sx={styleModal} >
        <Typography sx={{mb:'0.5em'}} variant="h2" color="primary">Вход</Typography>
        <div>
          <TextField sx={{mb: 2}} fullWidth  label="Login"  id="formAuth__input--1" 
          onChange={(e) => dispath(setLogin(e.target.value)) } value={login}
            name="login"
            />
        </div>
        <div >
          <TextField sx={{mb: 2}}  fullWidth label="Password" id="formAuth__input--2" type="password"
            onChange={(e) => dispath(setPass(e.target.value)) } value={pass}
            name="password"
            />
        </div>
        <Button color="primary" onClick={sub} >Войти</Button>
          <div className="formAuth__wrap-button">
            <Button onClick={
              () => {
              navigate('/feed')
              setOpen(false)
            }} color="primary" 
            >
              Зарегистрироваться
            </Button>
          </div>
      </Box>

    </Modal>
  </>
  )
}

export default Registry