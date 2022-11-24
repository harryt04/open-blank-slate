import React from 'react'
import { GameStart } from './screens/GameStart'
import { JoinGame } from './screens/JoinGame'
import { NewGame } from './screens/NewGame'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameStart />} />
          <Route path="/join" element={<JoinGame />} />
          <Route path="/new" element={<NewGame />} />
          <Route path="*" element={<GameStart />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
