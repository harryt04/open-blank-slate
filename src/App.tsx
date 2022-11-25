import React from 'react'
import { GameStart } from './screens/GameStart'
import { JoinGame } from './screens/JoinGame'
import { NewGame } from './screens/NewGame'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameStart />} />
          <Route path="/join" element={<JoinGame />} />
          <Route path="/new" element={<NewGame />} />
          <Route path="*" element={<GameStart />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
