import React from 'react'
import { Badge } from '@mui/material'
import { useSelector } from 'react-redux'
import { ShoppingBasket } from '@mui/icons-material'


const MyBadge = () => {

  const {countBasket} = useSelector(state => state.basket)

  return (
    <Badge color="secondary" badgeContent={countBasket}>
      <ShoppingBasket/>
    </Badge>
  )
}

export default MyBadge