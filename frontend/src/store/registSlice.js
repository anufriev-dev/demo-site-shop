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
      const respons = await fetch('http://localhost:4000/auth/api/registration',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if(respons.status === 400){
        alert('Такой пользователь уже существует!!')
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
        document.location.href = 'http://localhost:3000/feed/goodreq'
      }
    }
  }
})



export const {setLogin,setPassword,setEmile} = registSlice.actions
export default registSlice.reducer