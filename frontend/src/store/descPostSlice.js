import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getOnePostById = createAsyncThunk(
  'descPost/getOnePostById',
  async function(id,{rejectWithValue}) {
    try {
      let result = await fetch(`http://localhost:4000/auth/api/one/product/${id}`, {
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

// export const {} = descPostSlice.actions
export default descPostSlice.reducer