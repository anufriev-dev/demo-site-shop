import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const auth = createAsyncThunk(
  'regSlice/auth',
  async function (_,{rejectWithValue,getState}) {
    const {login,password,emile} = getState().reg
    try {
      const body = {
        login: login,
        password: password,
        emile: emile
      }
      let respons = await fetch(`${process.env.SERVER_API_URL}/auth/api/registration`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if(respons.status === 400){
        respons = await respons.json()
        respons.errors.errors.forEach(err => alert(err.msg))
      }  
      return  respons.status
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

const registSlice = createSlice({
  name: 'regSlice',
  initialState: {
    login: '',
    password: '',
    emile: '',
    response: ''
  },
  reducers: {
    setLogin (state,action) {
      state.login = action.payload
    },
    setPassword (state,action) {
      state.password = action.payload
    },
    setEmile (state, action) {
      state.emile = action.payload
    },
  },
  extraReducers: {
    [auth.fulfilled] : (state,action) => {
      state.response = action.payload
      if(action.payload < 400){
        document.location.href = `${process.env.THIS_APP_URL}/feed/goodreq`
      }
    }
  }
})


export const {setLogin,setPassword,setEmile} = registSlice.actions
export default registSlice.reducer