import {configureStore} from '@reduxjs/toolkit'
import regSlice from './regSlice'
import mainListSlice from './mainListSlice'

const store = configureStore({
  reducer: {
    reg: regSlice,
    mainList: mainListSlice
  }
})
export default store