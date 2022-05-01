import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getProductByArt = createAsyncThunk(
  'basket/getProductByArt',
  async function (_,{rejectWithValue}) {
    try {
      let reuslt = await fetch('')

      reuslt = reuslt.json()

      return reuslt.data

    } catch (e) {
      rejectWithValue(e)
    }
  }
)
export const getAllProduct = createAsyncThunk(
  'adminPanel/getAllProduct',
  async function (_,{rejectWithValue}) {
    try {
      const respons = await fetch(`http://localhost:4000/auth/api/product`, {
        method: 'GET'
      })
      if(!respons.ok){
        throw new Error('error with error')
      }
      let res = await respons.json()
      const keys = Object.keys(localStorage)

      res = res.data.filter(item => keys.includes(item.articul))
      return res
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)
export const createOrder = createAsyncThunk(
  'basket/createOrder',
  async function (body,{rejectWithValue}) {
    const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    try {
      let result = fetch('http://localhost:4000/auth/api/order', {
        method: 'POST',
        body: body,
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      result = (await result).json()

      return result.message
    } catch (e) {
      rejectWithValue(e)
    }
  }
)

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    data: [],
    basket : 0,
    keys: [],
    email: '',
    textArea: ''
  },
  reducers: {
    setBasket (state,action) {
      state.basket = action.payload
    },
    setKeys (state,action) {
      state.keys = action.payload
    },
    setEmail (state,action) {
      state.email = action.payload
    },
    setTextArea (state,action) {
      state.textArea = action.payload
    }
  },
  extraReducers: {
    [getAllProduct.fulfilled] : (state,actions) => {
      state.data = actions.payload
    },
    [getAllProduct.rejected] : (state,actions) => {
      console.log(actions)
    }
  }
})


export const {setKeys,setEmail,setTextArea,setBasket} = basketSlice.actions
export default basketSlice.reducer