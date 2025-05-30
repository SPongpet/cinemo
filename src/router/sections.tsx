// import Home from '@pages/Home'
import Box from '@mui/material/Box'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { varAlpha } from 'minimal-shared/utils'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { MainContent } from '@layouts/Main'
import { MovieDetailPage } from '@pages/MovieDetail'
import { MovieFinderPage } from '@pages/MovieFinder'
import { MyFavoritePage } from '@pages/MyFavorite'

import type { RouteObject } from 'react-router'

const renderFallback = () => (
  <Box
    sx={{
      display: 'flex',
      flex: '1 1 auto',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
)

export const routesSection: RouteObject[] = [
  {
    element: (
      <Suspense fallback={renderFallback()}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { index: true, element: <MovieFinderPage /> },
      { path: '/my-favorite', element: <MyFavoritePage /> },
      { path: '/movie/:id', element: <MovieDetailPage /> },
    ],
  },
]
