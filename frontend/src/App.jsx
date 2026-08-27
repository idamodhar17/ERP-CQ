import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Error from './Components/ERROR/Error';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginPage from './Components/LoginPage/LoginPage';
import FrontendRoute from './Components/Routes/FrontendRoute';
import Navbar from './Components/Navbar/Navbar'

function App() {
  const location = useLocation();
  const noNavbarRoutes = ['/', '/login'];

  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
        {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes> 

      {/* FrontendRoute contains its own <Routes>, so it's placed outside */}
      {/* {showNavbar && <FrontendRoute />}  */}

      {/* <Navbar /> */}
    </>
  );

}



export default App;

