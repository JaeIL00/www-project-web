import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCopyState: false
}

export const InfoSlice = createSlice({
  name: 'info',
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

export const { textCopyHandler, rebackHandler } = InfoSlice.actions

export const infoReducer = InfoSlice.reducer
