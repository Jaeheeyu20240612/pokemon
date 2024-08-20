import { useState } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import PokemonDetail from './pages/PokemonDetail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dex' element={<Dex />} />
          <Route path='/detail' element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
