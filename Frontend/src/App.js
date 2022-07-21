import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import EntityDetails from './pages/EntityDetails'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:missingId" element={<EntityDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
