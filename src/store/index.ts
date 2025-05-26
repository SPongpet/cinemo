import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import favoriteReducer from './slices/favoriteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    favorite: favoriteReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
