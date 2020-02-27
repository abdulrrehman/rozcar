import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage'
import TopNavigation from './TopNavigation/TopNavigation'

function App() {
  return (
    <div className="App">
      <TopNavigation/>
      <LandingPage/>
    </div>
  );
}

export default App;
