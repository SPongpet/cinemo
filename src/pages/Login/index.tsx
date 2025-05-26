import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Iconify } from '@components/iconify'
import { setToken } from '@store/slices/authSlice'

const LoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (username === 'admin' && password === '1234') {
      const fakeToken = 'mocked-jwt-token'
      dispatch(setToken(fakeToken))
      navigate('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
      <Box
        sx={{
          height: '100%',
          margin: 'auto',
          gap: 1.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          m: 8,
        }}
      >
        <Typography variant="h5">Sign in</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            flexDirection: 'column',
          }}
        >
          <TextField
            fullWidth
            name="username"
            label="Username"
            sx={{ mb: 3 }}
            slotProps={{
              inputLabel: { shrink: true },
            }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            slotProps={{
              inputLabel: { shrink: true },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            sx={{ mb: 3 }}
          />

          <Button fullWidth size="large" type="submit" color="inherit" variant="contained" onClick={handleLogin}>
            Sign in
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default LoginPage
