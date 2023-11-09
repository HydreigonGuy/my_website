
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import React from 'react';

const HomePage = React.lazy(() => import("./pages/home"));
const BlankPage = React.lazy(() => import("./pages/blank"));
const KoreanPage = React.lazy(() => import("./pages/korean"));
const KoreaPage = React.lazy(() => import("./pages/travels/korea"));
const KoreaJochiwonPage = React.lazy(() => import("./pages/travels/korea_cities/jochiwon"));
const KoreaSuwonPage = React.lazy(() => import("./pages/travels/korea_cities/suwon"));
const KoreaDaeguPage = React.lazy(() => import("./pages/travels/korea_cities/daegu"));

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<BlankPage />} />
          <Route path="/korean" element={<KoreanPage />} />
          <Route path="/korea" element={<KoreaPage />} />
          <Route path="/korea/jochiwon" element={<KoreaJochiwonPage />} />
          <Route path="/korea/suwon" element={<KoreaSuwonPage />} />
          <Route path="/korea/daegu" element={<KoreaDaeguPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
