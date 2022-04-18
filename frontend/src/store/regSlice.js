import { createSlice } from "@reduxjs/toolkit"

const regSlice = createSlice({
  name: 'registration',
  initialState: {
    login: '',
    pass: ''
  },
  reducers: {
    setLogin (state,action) {
      state.login = action.payload
    },
    setPass (state,action) {
      state.pass = action.payload
    },
    nulls (state,action) {
      state.login = ''
      state.pass = ''
    }
  }
})

export const {setLogin,setPass,nulls} = regSlice.actions

export default regSlice.reducer