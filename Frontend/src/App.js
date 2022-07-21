import "./App.css"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import EntityDetails from "./pages/EntityDetails"
import Header from "./components/Header"

function App() {
  return (
    <div className="body">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:missingId" element={<EntityDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
