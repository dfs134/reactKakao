import logo from './logo.svg';
import './App.css';
// import styled from "styled-components";
import Welcome from './pages/Welcome';
import List from './pages/List'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
