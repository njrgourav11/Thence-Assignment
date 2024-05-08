import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/hero';
import Success from './components/success';
import Register from './components/registration';
import Question from './components/question';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/success" element={<Success />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<Question />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;