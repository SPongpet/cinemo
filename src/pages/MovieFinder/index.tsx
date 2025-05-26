import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { movies } from '@api/mock'
import { MainContent } from '@layouts/Main'

import { SectionMovieFilters } from './SectionMovieFilters'
import { SectionMovieItem } from './SectionMovieItem'

export const MovieFinderPage = () => {
  const navigate = useNavigate()

  const [searchText, setSearchText] = useState('')

  const handleToDetail = useCallback(
    (movieId: string) => {
      navigate(`/movie/${movieId}`)
    },
    [navigate]
  )

  const filteredMovies = movies.filter((movie: any) => {
    const query = searchText.toLowerCase().trim()

    return (
      movie?.title_th?.toLowerCase().includes(query) ||
      movie?.title_en?.toLowerCase().includes(query) ||
      movie?.director?.toLowerCase().includes(query) ||
      movie?.actor?.toLowerCase().includes(query) ||
      movie?.genre?.toLowerCase().includes(query) ||
      movie?.rating?.toLowerCase().includes(query)
    )
  })

  return (
    <MainContent>
      <SectionMovieFilters searchText={searchText} setSearchText={setSearchText} />
      <SectionMovieItem movies={filteredMovies} onGo={handleToDetail} />
    </MainContent>
  )
}
