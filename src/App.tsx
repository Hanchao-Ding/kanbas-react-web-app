import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./labs";
import Kanbas from "./Kanbas";
import './App.css';
import './labs/lab2/index'

function App() {
  return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Kanbas/Dashboard" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
