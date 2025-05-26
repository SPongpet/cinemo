import Grid from '@mui/material/Grid'

import { CardItem } from '@components/card'

type Movie = {
  id: string | number
  // add other properties as needed
}

type SectionMovieItemProps = {
  movies: Movie[]
  onGo?: (movie: any) => void
}

/* eslint-disable react/prop-types */
export const SectionMovieItem: React.FC<SectionMovieItemProps> = ({ movies, onGo }) => {
  return (
    <Grid container spacing={3}>
      {movies.map((movie) => (
        <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 3 }}>
          <CardItem movie={movie} onGoToDetail={onGo} />
        </Grid>
      ))}
    </Grid>
  )
}
