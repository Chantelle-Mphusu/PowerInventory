import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'

function App() {
 

  return (
   
      <Router>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/about' element={<h1>About Page</h1>} />
          <Route path='/contact' element={<h1>Contact Page</h1>} />
          </Routes>

        </Router>

   
  )
}

export default App
