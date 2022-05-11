import { ShoppingBasket } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function MyBadge() {

  const {basket,countBasket} = useSelector(state => state.basket)

  return (
    <Badge color="secondary" badgeContent={countBasket}>
      <ShoppingBasket/>
    </Badge>
  )
}

export default MyBadge