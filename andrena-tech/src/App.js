import React from 'react';
import './index.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Header from './components/Header';
import Landing from './components/Landing';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Landing />
        <Services />
      </div>
    </Router>
  )
}
export default App;