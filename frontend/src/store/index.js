import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import mainListSlice from './mainListSlice'
import registSlice from './registSlice'
import adminPanelSlice from './adminPanelSlice'
import basketSlice from './basketSlice'
import orderSlice from './orderSlice'
import descPostSlice from './descPostSlice'

const store = configureStore({
  reducer: {
    auth: authSlice,
    mainList: mainListSlice,
    reg: registSlice,
    adminPanel:adminPanelSlice,
    basket: basketSlice,
    orderslice: orderSlice,
    descPost: descPostSlice
  },
  middleware: getDefaultMiddleware => {
  return  getDefaultMiddleware({
      serializableCheck: false
  })
  }
})

export default store