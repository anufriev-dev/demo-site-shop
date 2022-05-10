import { Button, Input, TextField, Typography } from '@mui/material'
import React from 'react'
import {useDispatch } from 'react-redux'
import {setImg,setProductid} from '../store/adminPanelSlice'
import {styleH3} from '../utils/style'
import {UploadFile} from '@mui/icons-material'
import { Box } from '@mui/system'

function FormPanel({modalFunc,name, nameBtn,title,price,onChangeTitle,onChangePrice,submit,productid}) {

  const dispatch = useDispatch()

  function fileUp (e) {
    e.preventDefault()
    dispatch(setProductid(productid))
    dispatch(setImg(e.target.files[0]))
  }
  function actionBtn (e) {
    submit(e)
    modalFunc(false)
  }


  
  return (
    <>
    <form >
      <Typography
        variant="h3"
        sx={{...styleH3,mb: '1em'}}
      >{name}</Typography>
      <div >
        <TextField sx={{mb: '1em'}} fullWidth label="Название" value={title} id="form-admin__ni21" 
         type="text" 
        onChange={e => dispatch(onChangeTitle(e.target.value))}
        />
      </div>
      <div >
        <TextField sx={{mb: '1em'}} fullWidth label="Цена" value={price} id="form-admin__ni22" 
         type="text" 
        onChange={e => dispatch(onChangePrice(e.target.value))} 
        />
      </div>
      <Box sx={{display: 'flex',justifyContent: 'space-between', alignItems: 'center'}}>
        <label htmlFor="upload1">
            <Input style={{display: 'none'}} id="upload1" multiple  type="file" onChange={e => fileUp(e)}/>
            <Button variant="contained" size="small" startIcon={<UploadFile/>} component="span">Загрузить</Button>
          </label> 
        <Button variant="contained" size="small" onClick={(e) => actionBtn(e)} >{nameBtn}</Button>
      </Box>
  </form>
  </>
  )
}

export default FormPanel