import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { clearToken } from '@store/slices/authSlice'

import type { StackProps } from '@mui/material/Stack'

// ----------------------------------------------------------------------

export function NavFooter({ sx, ...other }: StackProps) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(clearToken())
    navigate('/login')
  }

  return (
    <Box
      sx={[
        {
          mb: 4,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Button onClick={handleLogout} target="_blank" variant="contained" color="inherit">
        Logout
      </Button>
    </Box>
  )
}
