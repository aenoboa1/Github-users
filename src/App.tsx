import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes , Route } from "react-router-dom";
import Header from './components/Header'

function App() {
  return (
      <Router>
          <Route path = '/' exact={true}>



          </Route>
      </Router>

  );
}


export default App;

