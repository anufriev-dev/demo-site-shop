import { Box, FormControl, InputLabel, NativeSelect, Typography } from '@mui/material'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { setLimite  } from '../store/mainListSlice'
import {styleH1} from '../utils/style'

function SelectHeader() {
  const {limit} = useSelector(state => state.mainList)
  const dispatch = useDispatch() 

  const limitChanges = (e) => {
    const limit = e.target.value
    dispatch(setLimite(limit))
    localStorage.setItem('limit',JSON.stringify(limit))
  }

  return (
    <Box sx={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
        <Typography
          variant="h1"
          sx={styleH1}
        >
          Продукты 
        </Typography>
       <FormControl  > 
          <InputLabel>Лимит</InputLabel>
          <NativeSelect value={limit}  onChange={e => limitChanges(e) }>
            <option disabled >Меню</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </NativeSelect>
        </FormControl>
    </Box>
  )
}

export default SelectHeader