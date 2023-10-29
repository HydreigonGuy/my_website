
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import React from 'react';

const HomePage = React.lazy(() => import("./pages/home"));
const BlankPage = React.lazy(() => import("./pages/blank"));

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<BlankPage />} />
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
