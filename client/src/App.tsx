import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainPage from './views/Home'     
import About from './views/About'
import Events from './views/Events'
import AddEvent from './views/AddEvent'
import EditEvent from './views/EditEvent'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/new" element={<AddEvent />} />
          <Route path="/events/edit/:id" element={<EditEvent />} />
          <Route path="/events/new" element={<AddEvent />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
