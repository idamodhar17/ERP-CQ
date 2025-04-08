import './App.css'
import Error from './Components/ERROR/Error'
import LandingPage from './Components/LandingPage/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {

  return (
    <>
      {/* <Error/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
