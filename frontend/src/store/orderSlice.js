import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'

export const getAllOrder = createAsyncThunk(
  'orderslice/getAllOrder',
  async function (_,{rejectWithValue}) {
    const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    try {
      let res = await fetch('http://localhost:4000/auth/api/orderget', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      res = await res.json()
      return res.result
    } catch (e) {
      rejectWithValue(e)
    }
  }
)
export const deleteOneOrder = createAsyncThunk(
  'orderslice/deleteOneOrder',
  async function (id,{rejectWithValue}) {
    const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    try {
      let res = await fetch(`http://localhost:4000/auth/api/delete/order/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      res = await res.json()
      return res.message
    } catch (e) {
      rejectWithValue(e)
    }
  }
)

const orderSlice = createSlice({
  name: 'orderslice',
  initialState: {
    data: [],
    message: '',
    serch: '',
    status: null
  },
  reducers: {
    setSerch(state,actio) {
      state.serch = actio.payload
    }
  }
  ,
  extraReducers: {
    [getAllOrder.pending]: (state,action) => {
      state.status = 'loading'
    },
    [getAllOrder.fulfilled] : (state,action) => {
      state.data = action.payload
      state.message = ''
      state.status = 'resolved'
    },
    [getAllOrder.rejected] : (state,action) => {
      Object.console.log(action.payload)
    },
    [deleteOneOrder.fulfilled] : (state,action) => {
      state.message = action.payload
      alert(state.message)
    },
    [deleteOneOrder.rejected] : (state,action) => {
      Object.console.log(action.payload)
    }
  }
})

export const {setSerch} = orderSlice.actions
export default orderSlice.reducer