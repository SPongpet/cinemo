import { Box, Typography } from '@mui/material'

import type { MovieDetail } from '.'

export const SectionMovieTrailer = ({ movie }: { movie: MovieDetail }) => {
  return (
    <Box mt={5}>
      <Typography variant="h6" gutterBottom>
        ตัวอย่างภาพยนตร์
      </Typography>
      <Box component="video" controls width="100%" poster={movie.poster_url} sx={{ borderRadius: 2 }}>
        <source src={movie.tr_mp4} type="video/mp4" />
        Your browser does not support the video tag.
      </Box>
    </Box>
  )
}
