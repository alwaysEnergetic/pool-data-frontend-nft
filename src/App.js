import React, { lazy, Suspense } from 'react'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Welcome = lazy(() => import('./pages/welcome/Welcome'));
const Launchpad = lazy(() => import('./pages/launchpad/Launchpad'));

function App() {

  const Loading = () => {
    return (
      <div style={{width: '100vw', height: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        Loading...
      </div>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Loading></Loading>}><Welcome></Welcome></Suspense>}></Route>
        <Route path="/nfts" element={<Suspense fallback={<Loading></Loading>}><Launchpad></Launchpad></Suspense>}></Route>
      </Routes>
    </Router>

  );

}

export default App;
