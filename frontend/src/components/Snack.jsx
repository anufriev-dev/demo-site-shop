import React from 'react'
import { Alert, Snackbar } from '@mui/material'


const Snack = ({open,close}) => {
  
  return ( 
    <Snackbar 
    open={open}
    onClose={close}
    autoHideDuration={1500}
    >
      <Alert severity="success" sx={{ width: '100%' }}>
          Товар добавлен в корзину!
      </Alert>
    </Snackbar>
  )
}

export default Snack