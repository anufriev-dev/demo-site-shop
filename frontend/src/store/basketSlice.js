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
  async function (_,{rejectWithValue, dispatch}) {
    try {
      const respons = await fetch(`${process.env.SERVER_API_URL}/auth/api/product`, {
        method: 'GET'
      })
      if(!respons.ok){
        throw new Error('error with error')
      }
      let res = await respons.json()
      const keys = Object.keys(localStorage)

      res = res.data.filter(item => keys.includes(item.articul))
      dispatch( setData(res))
      return res
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)
export const createOrder = createAsyncThunk(
  'basket/createOrder',
  async function (body,{rejectWithValue}) {
    try {
      let result = await fetch(`${process.env.SERVER_API_URL}/auth/api/order`, {
        method: 'POST',
        body: body,
      })

      if(!result.ok) { 
        result = await result.json()
        result.errors.errors.forEach(it => alert(it.msg))
        return false

      } else {
        return true
      }
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
    textArea: '',
    countBasket: 0,
    status: null
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
    },
    setData (state,action) {
      state.data = action.payload
    },
    setCountBasket (state, action) {
      state.countBasket = action.payload
    }
  },
  extraReducers: {
    [getAllProduct.pending] : (state, action) => {
      state.status = 'loading'
    },
    [getAllProduct.fulfilled] : (state,action) => {
      state.status = 'resolved'
    },
    [getAllProduct.rejected] : (state,actions) => {
      state.status = 'error'
      Object.console.log(actions)
    },
    [createOrder.fulfilled] : (state,action) => {
        if(action.payload) {
          state.email = ''
          state.textArea = ''
          localStorage.clear()
          document.location.href = '/basket/order'    
        }
    },
    [createOrder.rejected] : (state,action) => {
      Object.console.log(action.payload)
    }
  }
})


export const {setKeys,setEmail,setTextArea,setBasket,setData,setCountBasket} = basketSlice.actions
export default basketSlice.reducer