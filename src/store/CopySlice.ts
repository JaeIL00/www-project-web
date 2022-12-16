import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCopyState: false
}

export const CopySlice = createSlice({
  name: 'copyText',
  initialState,
  reducers: {
    textCopyHandler: (state, action) => {
      navigator.clipboard.writeText(action.payload)
      state.isCopyState = true
    },
    rebackHandler: (state) => {
      state.isCopyState = false
    }
  }
})

export const { textCopyHandler, rebackHandler } = CopySlice.actions

export const copyReducer = CopySlice.reducer
