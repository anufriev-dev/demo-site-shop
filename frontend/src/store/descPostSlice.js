import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getOnePostById = createAsyncThunk(
  'descPost/getOnePostById',
  async function(id,{rejectWithValue}) {
    try {
      let result = await fetch(`${process.env.SERVER_API_URL}/auth/api/one/product/${id}`, {
        method: 'GET'
      })

      result = await result.json()
      return result

    } catch(e) {
      rejectWithValue(e)
    }
  }
)

const descPostSlice = createSlice({
  name: 'descPost',
  initialState: {
    status: null,
    post: []
  },
  reducers: {

  },
  extraReducers: {
    [getOnePostById.pending]: (state,action) => {
      state.status = 'loading'
    },
    [getOnePostById.fulfilled]: (state,action) => {
      state.post = action.payload
      state.status = 'resolved'
    },
    [getOnePostById.rejected]: (state,action) => {
      state.status = null
      console.log('Rejected')
    },
  }
})

export default descPostSlice.reducer