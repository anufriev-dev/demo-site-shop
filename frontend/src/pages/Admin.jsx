import React from 'react'
import { styleH1 } from '../utils/style'
import MyCard from '../components/MyCard'
import { Container, Grid, Typography } from '@mui/material'


const textPost = 'Здесь вы сможете редактировать просты с товарами, а именно: удалять, обновлять, добавлять'
const textOrders = 'Здесь расположены заказы клиентов'


const Admin = () => {
  
  return (
    <Container >
      <Typography
        variant="h1"
        sx={{...styleH1,mb: '1em'}}
      >
        Админка
      </Typography>
      <Grid container spacing={2} >
        <MyCard title={'Посты с товарами'} text={textPost} btn={'Перейти'} link="/admin/panel" />
        <MyCard title={'Заказы'} text={textOrders} btn={'Перейти'} link="/admin/order" />
      </Grid>
    </Container>
  )
}

export default Admin