import { useState } from 'react';
import reactLogo from './assets/react.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Image, Button } from 'react-bootstrap';
import { Van } from './pages/Van';
import { Home } from './pages/Home';
import { Header } from './comonents/Header';
import { Footer } from './comonents/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route path='/'  element={Home}/>
      <Route path='/van'  element={Van}/>
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;