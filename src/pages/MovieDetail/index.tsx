import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Box, Button, Container } from '@mui/material'
import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { movies } from '@api/mock'
import { MainContent } from '@layouts/Main'

import { SectionDetail } from './SectionDetail'
import { SectionMovieTrailer } from './SectionMovieTrailer'

export type MovieDetail = {
  id: number
  title_en: string
  title_th: string
  rating: string
  duration: number
  release_date: string
  synopsis_th: string
  synopsis_en: string
  director: string
  actor: string
  genre: string
  poster_url: string
  trailer: string
  tr_mp4: string
}

export const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const [movie, setMovie] = useState<MovieDetail | null>(null)

  useMemo(() => {
    const foundMovie = movies.find((item) => String(item.id) === id)
    setMovie(foundMovie || null)
  }, [id])

  return (
    <MainContent>
      <Container sx={{ py: 5 }}>
        <Box
          sx={{
            py: 1,
            pl: 1,
            pr: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {' '}
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => window.history.back()}
          >
            กลับ
          </Button>
        </Box>
        <SectionDetail movie={movie} />

        <SectionMovieTrailer movie={movie} />
      </Container>
    </MainContent>
  )
}
