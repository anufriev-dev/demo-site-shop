import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllProduct = createAsyncThunk(
  'adminPanel/getAllProduct',
  async function (_,{rejectWithValue}) {
    try {
      const respons = await fetch('http://localhost:4000/auth/api/product', {
        method: 'GET'
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
      return result.message
    } catch (e) {
      rejectWithValue(e)
    }
  }
)
export const createProduct = createAsyncThunk(
  'adminPanel/createProduct',
  async function (_,{rejectWithValue,getState}) {
    const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    const {title,price,img,rating,descpost} = getState().adminPanel
    const body = new FormData()
    body.append('title',title)
    body.append('price',price)
    body.append('img',img)
    body.append('rating',rating)
    body.append('descpost',descpost)
    try {
      let result = await fetch('http://localhost:4000/auth/api/product/create', {
        method: 'POST',
        headers: {
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
export const getOneProduct = createAsyncThunk(
  'adminPanel/getOneProduct',
  async function (id,{rejectWithValue}) {
    try {
      let result = await fetch(`http://localhost:4000/auth/api/one/product/${id}`, {
        method: 'GET'
      })
      result = await result.json()

      return result
    } catch (e) {
      rejectWithValue(e)
    }
  }
)
export const updateProduct = createAsyncThunk(
  'adminPanel/updateProduct',
  async function (_,{rejectWithValue,getState}) {

    try {

      const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
      const {img,oneProduct,productid,rating,descpost} = await getState().adminPanel
      const body = new FormData()

      body.append('title', oneProduct[0].title)
      body.append('price', oneProduct[0].price)
      body.append('img',  img)
      body.append('rating',rating)
      body.append('descpost',descpost)

      let result = await fetch(`http://localhost:4000/auth/api/product/update/${productid}` , {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: body
      })
      result = await result.json()

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
    price: 0,
    rating: '',
    descpost: '',
    oneProduct: [{title: '', price: '',productid: '', id: 0}],
    amountPost: 0,
    productid: 0,
    status: null
  },
  reducers: {
    setTitle(state,action) {
      state.title = action.payload
    },
    setImg (state,action) {
      state.img = []
      state.img = action.payload
    },
    setPrice (state, action) {
      state.price = action.payload
    },
    setOneProductTitle (state, action) {
      state.oneProduct[0].title = action.payload
    },
    setOneProductPrice (state, action) {
      state.oneProduct[0].price = action.payload
    },
    setProductid (state,action) {
      state.productid = action.payload
    },
    setRating (state,action) {
      state.rating = action.payload 
    },
    setDescpost	(state,action) {
      state.descpost = action.payload
    },
  },
  extraReducers: {
    [getAllProduct.pending]: (state,action) => {
      state.status = 'loading'
    },
    [getAllProduct.fulfilled] : (state,action) => {
      state.store = action.payload.data
      state.status = 'resolved'
    },
    [getAllProduct.rejected] : (state, action) => {
        state.error = action.payload
    },
    [deleteProduct.fulfilled] : (state, action) => {
      state.message = action.payload
      state.amountPost = (state.store.length + 1)
      alert(state.message)
    },
    [deleteProduct.rejected] : (state, action) => {
      state.message = action.payload
    },
    [createProduct.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.message = action.payload
      state.amountPost = (state.store.length + 1)
      if(state.message.status === 'OK'){
        state.title = ''
        state.img = []
        state.price = ''
        state.rating = ''
        state.descpost = ''
        alert('Продукт создан!')
      }else {
        alert(state.message.message)
      }
    },
    [createProduct.rejected] : (state,action) => {
      alert(action.payload)
    },
    [getOneProduct.fulfilled] : (state, action) => {
      state.oneProduct = action.payload
      state.oneProduct[0].img = []
      state.rating = action.payload[0].rating
      state.descpost = action.payload[0].descpost
    },
    [updateProduct.fulfilled] : (state,action) => {
      state.amountPost = (state.store.length + 1)
      state.message = action.payload.status
      if(state.message === 'OK') {
        alert(action.payload.message)
        state.oneProduct[0].title = ''
        state.img = []
        state.oneProduct[0].price = ''
      }
    },
    [updateProduct.rejected] : (state,action) => {
      alert('Не все поля заполнены')
      Object.console.log(action)
    }
  }
})

export const {setDescpost,setRating,setTitle,setImg,setPrice,setOneProductTitle,setOneProductPrice,setProductid} = adminPanelSlice.actions
export default adminPanelSlice.reducer