import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllProduct = createAsyncThunk(
  'adminPanel/getAllProduct',
  async function (_,{rejectWithValue}) {
    // const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]
    try {
      const respons = await fetch(`http://localhost:4000/auth/api/product`, {
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
      console.log(result)
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
    const {title,price,img} = getState().adminPanel
    const body = new FormData()
    body.append('title',title)
    body.append('price',price)
    body.append('img',img)
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
export const getOneProduct = createAsyncThunk(
  'adminPanel/getOneProduct',
  async function (id,{rejectWithValue}) {
    const token = document.cookie.split('; ').filter(item => item.startsWith('user='))[0].split('=')[1]

    try {
      let result = await fetch(`http://localhost:4000/auth/api/one/product/${id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
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
      const {img,oneProduct,productid} = await getState().adminPanel
      console.log(productid)
      const body = new FormData()

      body.append('title',await oneProduct[0].title)
      body.append('price',await oneProduct[0].price)
      body.append('img', await img)

      let result = await fetch(`http://localhost:4000/auth/api/product/update/${productid}` , {
        method: 'PUT',
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
    oneProduct: [{title: '', price: '',productid: '', id: 0}],
    amountPost: 0,
    productid: 0
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
      state.amountPost = (state.store.length + 1)
      alert(state.message)
    },
    [deleteProduct.rejected] : (state, action) => {
      state.message = action.payload
    },
    [createProduct.fulfilled]: (state, action) => {
      state.message = action.payload
      state.amountPost = (state.store.length + 1)
      if(state.message.status === 'OK'){
      state.title = ''
      state.img = []
      state.price = ''
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
      console.log(action)
    }
  }
})

export const {setTitle,setImg,setPrice,setOneProductTitle,setOneProductPrice,setProductid} = adminPanelSlice.actions
export default adminPanelSlice.reducer