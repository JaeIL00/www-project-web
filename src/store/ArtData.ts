import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  resArtwork: [
    {
      artist: {
        id: 0
      },
      genre: '',
      type: '',
      url: '',
      isMain: false
    }
  ],
  resArtist: [
    {
      id: 0,
      genre: '',
      nickname: '',
      profileImage: ''
    }
  ],
  artworkPercentage: [] as string[]
}

export const ArtDataSlice = createSlice({
  name: 'artwork',
  initialState,
  reducers: {
    getArtworkReponse: (state, action) => {
      state.resArtwork = action.payload[0]
      state.resArtist = action.payload[1]
    },
    getImagePercent: (state, action) => {
      state.artworkPercentage.push(action.payload)
    }
  }
})

export const { getArtworkReponse, getImagePercent } = ArtDataSlice.actions

export const artDataSliceReducer = ArtDataSlice.reducer
