import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HeaderBar } from './components/HeaderBar'
import { SignIn } from './pages/SignIn';
import { View } from './pages/View';
import { Create } from './pages/Create'
import './App.css';

function App() {
  return (
    <Router>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/view" element={<View />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
