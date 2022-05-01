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
    message: ''
  },
  extraReducers: {
    [getAllOrder.fulfilled] : (state,actio) => {
      state.data = actio.payload
      state.message = ''
    },
    [getAllOrder.rejected] : (state,actio) => {
      Object.console.log(actio.payload)
    },
    [deleteOneOrder.fulfilled] : (state,actio) => {
      state.message = actio.payload
      alert(state.message)
    },
    [deleteOneOrder.rejected] : (state,actio) => {
      Object.console.log(actio.payload)
    }
  }
})

export default orderSlice.reducer