import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import mainListSlice from './mainListSlice'
import registSlice from './registSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    mainList: mainListSlice,
    reg: registSlice
  }
})

export default store