import { Alert, Snackbar } from '@mui/material';
import React from 'react'

function Snack({open,close}) {
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