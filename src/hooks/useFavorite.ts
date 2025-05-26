import { useDispatch, useSelector } from 'react-redux'

import { addFavorite, removeFavorite } from '@store/slices/favoriteSlice'

import type { RootState } from '@store/index'

export const useFavorite = () => {
  const dispatch = useDispatch()
  const favorites = useSelector((state: RootState) => state.favorite.movies)

  const toggleFavorite = (movie: any) => {
    const isFav = favorites.some((m) => m.id === movie.id)
    if (isFav) {
      dispatch(removeFavorite(movie.id))
    } else {
      dispatch(addFavorite(movie))
    }
  }

  const isFavorite = (movieId: number) => {
    return favorites.some((m) => m.id === movieId)
  }

  return { favorites, toggleFavorite, isFavorite }
}
