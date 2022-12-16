import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { UseApi } from '../api/UseApi'
import { artworkReducer } from './Artwork'
import { copyReducer } from './CopySlice'

export const Store = configureStore({
  reducer: {
    [UseApi.reducerPath]: UseApi.reducer,
    info: copyReducer,
    artwork: artworkReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(UseApi.middleware)
})

setupListeners(Store.dispatch)

type RootState = ReturnType<typeof Store.getState>
type AppDispatch = typeof Store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default Store
