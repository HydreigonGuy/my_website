
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import React from 'react';

const HomePage = React.lazy(() => import("./pages/home"));
const BlankPage = React.lazy(() => import("./pages/blank"));
const KoreanPage = React.lazy(() => import("./pages/cheat_sheets/korean/korean"));
const KoreanDatesPage = React.lazy(() => import("./pages/cheat_sheets/korean/dates"));
const KoreanVerbsPage = React.lazy(() => import("./pages/cheat_sheets/korean/verbs"));
const UKPage = React.lazy(() => import("./pages/travels/uk"));
const KoreaPage = React.lazy(() => import("./pages/travels/korea"));
const KoreaJochiwonPage = React.lazy(() => import("./pages/travels/korea_cities/jochiwon"));
const KoreaSuwonPage = React.lazy(() => import("./pages/travels/korea_cities/suwon"));
const KoreaDaeguPage = React.lazy(() => import("./pages/travels/korea_cities/daegu"));
const KoreaSejongPage = React.lazy(() => import("./pages/travels/korea_cities/sejong"));
const KoreaBusanPage = React.lazy(() => import("./pages/travels/korea_cities/busan"));
const KoreaGwangjuPage = React.lazy(() => import("./pages/travels/korea_cities/gwangju"));

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<BlankPage />} />
          <Route path="/korean" element={<KoreanPage />} />
          <Route path="/korean/dates" element={<KoreanDatesPage />} />
          <Route path="/korean/verbs" element={<KoreanVerbsPage />} />
          <Route path="/uk" element={<UKPage />} />
          <Route path="/korea" element={<KoreaPage />} />
          <Route path="/korea/jochiwon" element={<KoreaJochiwonPage />} />
          <Route path="/korea/suwon" element={<KoreaSuwonPage />} />
          <Route path="/korea/daegu" element={<KoreaDaeguPage />} />
          <Route path="/korea/sejong" element={<KoreaSejongPage />} />
          <Route path="/korea/busan" element={<KoreaBusanPage />} />
          <Route path="/korea/gwangju" element={<KoreaGwangjuPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
