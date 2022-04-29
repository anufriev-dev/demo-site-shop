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
  async function (_,{rejectWithValue,getState}) {
    // const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    // const {data,keys} = getState().basket
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

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    data: [],
    load: false,
    basket : 0,
    basketItem: [],
    keys: []
  },
  reducers: {
    setBasket (state,actions) {
      state.basket += parseInt(actions.payload)
      localStorage.setItem('basket',JSON.stringify(state.basket))
    },
    setBasketItem (state,actions) {
      state.basketItem.push(actions.payload)
    },
    setKeys (state,actions) {
      state.keys = actions.payload
    }
  },
  extraReducers: {
    [getProductByArt.pending] : (state,actions) => {
      state.load = true
    },
    [getProductByArt.fulfilled] : (state,actions) => {
      state.load = false
      state.data = actions.payload
    },
    [getAllProduct.fulfilled] : (state,actions) => {
      state.data = actions.payload
    },
    [getAllProduct.rejected] : (state,actions) => {
      console.log(actions)
    }
  }
})


export const {setBasket,setBasketItem,setKeys} = basketSlice.actions
export default basketSlice.reducer