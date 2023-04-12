import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeView } from './Views/Home/HomeView'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomeView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
