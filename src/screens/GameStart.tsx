import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
export const GameStart = () => {
  const navigate = useNavigate()

  return (
    <Stack spacing={2} direction="row" style={styles.container}>
      <Button variant="contained" onClick={() => navigate('/join')}>
        Join Game
      </Button>
      <Button variant="contained" onClick={() => navigate('/new')}>
        New Game
      </Button>
    </Stack>
  )
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
}
