import { useState } from 'react';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import styled from 'styled-component';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dex' element={<Dex />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
