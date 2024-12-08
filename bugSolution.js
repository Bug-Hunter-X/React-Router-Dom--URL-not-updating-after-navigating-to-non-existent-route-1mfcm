import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <div>Home</div>;}
function About() { return <div>About</div>;}
function NotFound() {
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (location.pathname === '*') {
      setRedirect(true);
    }
  }, [location]);

  if (redirect) {
    return <Navigate to="/" replace={true}/>;
  } else {
    return <div>Not Found</div>;
  }
}
