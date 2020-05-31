import React from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main';
import Footer from './components/Footer';
import '../src/components/styles/Main.css'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App main">
      <Welcome />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
