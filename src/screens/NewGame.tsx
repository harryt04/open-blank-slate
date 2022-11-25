import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

export const NewGame = () => {
  const navigate = useNavigate()

  return (
    <Stack spacing={2} direction="column" style={styles.container}>
      <h1>Your game id: </h1>
      <Button variant="contained" onClick={() => navigate('/new')}>
        Copy Link to Clipboard
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
