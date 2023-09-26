import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Startpage from './pages/Startpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css'

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route
          path="/"
          element={<Startpage/>}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
 
      </Routes>
    </Router>

    
    </>
  )
}

export default App
