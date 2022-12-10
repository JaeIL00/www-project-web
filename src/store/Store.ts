import { configureStore } from '@reduxjs/toolkit'
import { UseApi } from '../api/UseApi'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const Store = configureStore({
  reducer: {
    [UseApi.reducerPath]: UseApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(UseApi.middleware)
})

setupListeners(Store.dispatch)

type RootState = ReturnType<typeof Store.getState>
type AppDispatch = typeof Store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default Store
