import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import deleteCookie from '../utils/deleteCookie'

export const authariz = createAsyncThunk(
  'registration/authariz',
  async function (_,{getState, rejectWithValue}) {
    const {login,pass} = getState().auth
    try {
      const body = {
        password: pass,
        login: login
      }
      let res = await fetch(`${process.env.SERVER_API_URL}/auth/api/auth`,{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      if(res.status === 400) {
        return rejectWithValue()
      }
      res = await res.json()

      return res
    } catch (e) {
      Object.console.log(e)
      return rejectWithValue(e)
    }
  }
)

const regSlice = createSlice({
  name: 'registration',
  initialState: {
    login: '',
    pass: '',
    cookie: '',
    role: '',
  },
  reducers: {
    setLogin (state,action) {
      state.login = action.payload
    },
    setPass (state,action) {
      state.pass = action.payload
    },
    nulls (state,action) {
      state.login = ''
      state.pass = ''
    },
    setAdmin(state,action) {
      state.admin = action.payload
    }
  },
  extraReducers: {
    [authariz.fulfilled]: (state,action) => {
      state.cookie = action.payload.token
      state.role = action.payload.role
      if(state.cookie) {
        localStorage.setItem('ADMIN','')
        // для https 
        // window.cookieStore.delete('role')
        // window.cookieStore.delete('user')
        // window.cookieStore.set({name: 'user', value: state.cookie, sameSite: 'lax'})
        // window.cookieStore.set('role',state.role)
        deleteCookie()

        document.cookie = `user=${state.cookie}`
        document.cookie = `role=${state.role}`
        
        if(state.role === 'ADMIN'){
          localStorage.setItem('ADMIN','ADMIN')
        }
        state.login = ''
        state.pass = ''
        alert('Успех')
      }
    },
    [authariz.rejected] : (state, action) => {
      state.login = ''
      state.pass = ''
      alert('Неверный Логин или пароль')
    }
  }
})

export const {setLogin,setPass,nulls,setAdmin} = regSlice.actions
export default regSlice.reducer