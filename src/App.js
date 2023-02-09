import React, { useState, useEffect } from 'react';
import CardLayout from './components/card';
import NavBar from './components/nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = 'Joss Cooley';
  }, []);

  return (
    <div className="ui container">
      <NavBar />
      <h1>Hello There</h1>
      <CardLayout />
    </div>
  );
}

export default App;