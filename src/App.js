import { useState, useEffect } from 'react';
import './App.css';

const tele = window.Telegram.WebApp;
function App() {
  useEffect(() => {
tele.ready();
  });
  return (
    <div className="App">
     <h1>Welcome ALhayee</h1>
    </div>
  );
}

export default App;
