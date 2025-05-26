import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

interface Movie {
  id: number
  title_en: string
  title_th: string
  poster_url: string
}

interface FavoriteState {
  movies: Movie[]
}

const initialState: FavoriteState = {
  movies: [],
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      if (!state.movies.find((m) => m.id === action.payload.id)) {
        state.movies.push(action.payload)
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload)
    },
  },
})

export const { addFavorite, removeFavorite } = favoriteSlice.actions
export default favoriteSlice.reducer
