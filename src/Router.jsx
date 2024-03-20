import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import List from './pages/List'

function Router() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/List" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;