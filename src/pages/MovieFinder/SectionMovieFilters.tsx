import { Input, InputAdornment } from '@mui/material'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { varAlpha } from 'minimal-shared/utils'

import { Iconify } from '@components/iconify'

type SectionMovieFiltersProps = {
  searchText: string
  setSearchText: (value: string) => void
}

export const SectionMovieFilters = ({ searchText, setSearchText }: SectionMovieFiltersProps) => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap-reverse',
        justifyContent: 'flex-end',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0, sm: 0.75 } }}>
        <Box
          sx={{
            zIndex: theme.zIndex.appBar + 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            boxShadow: theme.vars.customShadows.z8,
            px: { xs: 3, md: 3 },
            height: {
              xs: 'var(--layout-header-mobile-height)',
              md: 'var(--layout-header-desktop-height)',
            },
            backgroundColor: varAlpha(theme.vars.palette.background.defaultChannel, 0.8),
          }}
        >
          <Input
            autoFocus
            fullWidth
            disableUnderline
            placeholder="Search by name, director, cast, genre, rating…"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <Iconify width={40} icon="eva:search-fill" sx={{ color: 'text.disabled' }} />
              </InputAdornment>
            }
          />
        </Box>
      </Box>
    </Box>
  )
}
