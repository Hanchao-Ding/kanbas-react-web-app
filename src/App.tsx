import React from 'react';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Labs from "./labs";
import Kanbas from "./Kanbas";
import './App.css';
import './labs/lab2/index'
import store from "./Kanbas/store";
import { Provider } from "react-redux";

function App() {
  return (
    <HashRouter>
            <Provider store={store}>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Kanbas/Dashboard" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
