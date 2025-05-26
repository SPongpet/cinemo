import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Label } from '@components/label'
import { useFavorite } from '@hooks/useFavorite'

// ----------------------------------------------------------------------

type CardItemProps = {
  movie: any
  onGoToDetail: (movie: any) => void
}

export function CardItem({ movie, onGoToDetail }: CardItemProps) {
  const { toggleFavorite, isFavorite } = useFavorite()

  const renderRating = (
    <Label
      variant="inverted"
      color={(movie.rating === 'น18+' && 'error') || 'info'}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {movie.rating}
    </Label>
  )

  const renderFavorite = (
    <Box
      color="default"
      onClick={() => toggleFavorite(movie)}
      sx={{
        zIndex: 10,
        top: 16,
        left: 16,
        position: 'absolute',
        textTransform: 'uppercase',
      }}
    >
      {isFavorite(movie.id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="error" />}
    </Box>
  )

  const renderImg = (
    <Box
      component="img"
      alt={movie.title_th}
      src={movie.poster_url}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
        borderRadius: 1,
        transition: 'transform 0.3s ease',
      }}
    />
  )

  const renderOverlay = (
    <Box
      className="card-overlay"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0,0,0,0.5)',
        opacity: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease',
        borderRadius: 1,
      }}
    >
      <Stack direction="row" spacing={2}>
        {renderFavorite}
        {movie.rating && renderRating}
        <Box
          component="button"
          sx={{
            border: 'none',
            bgcolor: 'transparent',
            color: 'white',
            fontSize: 18,
            cursor: 'pointer',
          }}
          onClick={() => onGoToDetail(movie.id)}
        >
          ดูเพิ่มเติม
        </Box>
      </Stack>
    </Box>
  )

  const renderDetail = (
    <Stack spacing={0.5}>
      <Typography variant="subtitle1" noWrap>
        {movie.title_th}
      </Typography>
      <Typography variant="body2" color="text.secondary" noWrap>
        {movie.title_en}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        เข้าฉาย: {movie.release_date} | {movie.duration} นาที
      </Typography>
    </Stack>
  )

  return (
    <Card
      sx={{
        position: 'relative',
        overflow: 'hidden',
        '&:hover .card-img': {
          transform: 'scale(1.05)',
        },
        '&:hover .card-overlay': {
          opacity: 1,
        },
      }}
    >
      <Box sx={{ pt: '150%', position: 'relative' }}>
        {renderImg}
        {renderOverlay}
      </Box>

      <Stack spacing={2} sx={{ p: 2 }}>
        {renderDetail}
      </Stack>
    </Card>
  )
}
