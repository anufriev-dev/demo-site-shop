import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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
    role: ''
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
    }
  },
  extraReducers: {
    [authariz.fulfilled]: (state,action) => {
      state.cookie = action.payload.token
      state.role = action.payload.role
      if(state.cookie) {
        // для https 
        // window.cookieStore.delete('role')
        // window.cookieStore.delete('user')
        // window.cookieStore.set({name: 'user', value: state.cookie, sameSite: 'lax'})
        // window.cookieStore.set('role',state.role)
        (function() {
          var cookies = document.cookie.split(';')
          for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i]
            var eqPos = cookie.indexOf('=')
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;'
            document.cookie = name + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
          }
        })()
        document.cookie = `user=${state.cookie}`
        document.cookie = `role=${state.role}`

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

export const {setLogin,setPass,nulls} = regSlice.actions
export default regSlice.reducer