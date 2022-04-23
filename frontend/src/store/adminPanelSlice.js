import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllProduct = createAsyncThunk(
  'adminPanel/getAllProduct',
  async function (_,{rejectWithValue}) {
    // const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    try {
      const respons = await fetch(`http://localhost:4000/auth/api/product`, {
        method: 'GET',
        headers: {
          // 'Authorization': `Bearer ${token}`
        }
      })
      if(!respons.ok){
        throw new Error('error with error')
      }
      const data = await respons.json()
      return data
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)
export const deleteProduct = createAsyncThunk(
  'adminPanel/deleteProduct',
  async function (id,{rejectWithValue}) {
    const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    try {
      let result = fetch(`http://localhost:4000/auth/api/product/delete/${id}`,{
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      result = await (await result).json()
      console.log(result)
      return result.message
    } catch (e) {
      rejectWithValue(e)
    }
  }
)
export const createProduct = createAsyncThunk(
  'adminPanel/createProduct',
  async function (body,{rejectWithValue}) {
    const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    try {
      let result = await fetch('http://localhost:4000/auth/api/product/create', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        },
        body: body
      })
      result = result.json()
      return result
    } catch (e) {
      rejectWithValue(e)
    }
  }
)

const adminPanelSlice = createSlice({
  name: 'adminPanel',
  initialState: {
    store: [],
    error: null,
    message: null,
    title: '',
    img: [],
    price: 0
  },
  reducers: {
    setTitle(state,action) {
      state.title = action.payload
    },
    setImg (state,action) {
      state.img = action.payload
    },
    setPrice (state, action) {
      state.price = action.payload
    }
  },
  extraReducers: {
    [getAllProduct.fulfilled] : (state,action) => {
      state.store = action.payload.data
    },
    [getAllProduct.rejected] : (state, action) => {
        state.error = action.payload
    },
    [deleteProduct.fulfilled] : (state, action) => {
      state.message = action.payload
      alert(state.message)
      document.location.reload()
    },
    [deleteProduct.rejected] : (state, action) => {
      state.message = action.payload
    },
    [createProduct.fulfilled]: (state, action) => {
      state.message = action.payload
      state.title = ''
      state.img = null
      state.price = ''
      document.location.reload()
      
    },
    [createProduct.rejected] : (state,action) => {
      console.log(action.payload)
    }
  }
})

export const {setTitle,setImg,setPrice} = adminPanelSlice.actions
export default adminPanelSlice.reducer