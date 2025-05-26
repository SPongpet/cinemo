import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material'

import { useFavorite } from '@hooks/useFavorite'

import type { MovieDetail } from '.'

export const SectionDetail = ({ movie }: { movie: MovieDetail }) => {
  const { isFavorite } = useFavorite()
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
      <Box
        mt={5}
        component="img"
        src={movie.poster_url}
        alt={movie.title_th}
        sx={{
          width: { xs: '100%', md: 300 },
          borderRadius: 2,
          objectFit: 'cover',
          boxShadow: 3,
        }}
      />

      <Box flex={1}>
        <Box flex={1} display="flex" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h4">{movie.title_th}</Typography>
          {isFavorite(movie.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="error" />}
        </Box>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {movie.title_en}
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <Chip label={movie.rating} color="warning" />
          <Chip label={`${movie.duration} นาที`} />
          <Chip label={`ฉาย: ${movie.release_date}`} />
        </Stack>

        <Typography variant="body1" mb={2}>
          {movie.synopsis_th}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="body2">
          <strong>ผู้กำกับ:</strong> {movie.director}
        </Typography>
        <Typography variant="body2">
          <strong>นักแสดง:</strong> {movie?.actor?.replace(/\/+/g, ', ')}
        </Typography>
        <Typography variant="body2">
          <strong>ประเภท:</strong> {movie.genre}
        </Typography>

        <Box mt={3}>
          <Button variant="contained" color="error" startIcon={<PlayArrowIcon />} href={movie.trailer} target="_blank">
            ดูตัวอย่าง
          </Button>
        </Box>
      </Box>
    </Stack>
  )
}
