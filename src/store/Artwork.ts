import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  percentage: [] as string[]
}

export const ArtworkSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    getImagePercent: (state, action) => {
      state.percentage.push(action.payload)
    }
  }
})

export const { getImagePercent } = ArtworkSlice.actions

export const artworkReducer = ArtworkSlice.reducer
