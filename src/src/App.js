
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/App.css';
import React from 'react';

const HomePage = React.lazy(() => import("./pages/home"));
const BlankPage = React.lazy(() => import("./pages/blank"));
const KoreanPage = React.lazy(() => import("./pages/cheat_sheets/korean/korean"));
const KoreanDatesPage = React.lazy(() => import("./pages/cheat_sheets/korean/dates"));
const KoreanVerbsPage = React.lazy(() => import("./pages/cheat_sheets/korean/verbs"));
const KoreanAnimalsPage = React.lazy(() => import("./pages/cheat_sheets/korean/animals"));
const KoreanQuestionsPage = React.lazy(() => import("./pages/cheat_sheets/korean/questions"));
const KoreanSchoolPage = React.lazy(() => import("./pages/cheat_sheets/korean/school"));
const KoreanPlacesPage = React.lazy(() => import("./pages/cheat_sheets/korean/places"));
const KoreanAdjectivesPage = React.lazy(() => import("./pages/cheat_sheets/korean/adjectives"));
const KoreanFoodPage = React.lazy(() => import("./pages/cheat_sheets/korean/food"));
const KoreanVocabularyPage = React.lazy(() => import("./pages/cheat_sheets/korean/vocabulary"));
const DevOpsPage = React.lazy(() => import("./pages/cheat_sheets/devops/devops"));
const DevOpsDockerPage = React.lazy(() => import("./pages/cheat_sheets/devops/docker"));
const DevOpsTraefikPage = React.lazy(() => import("./pages/cheat_sheets/devops/traefik"));
const DevOpsPrometheusPage = React.lazy(() => import("./pages/cheat_sheets/devops/prometheus"));
const DevOpsCertbotPage = React.lazy(() => import("./pages/cheat_sheets/devops/certbot"));
const DevOpsDatabasesPage = React.lazy(() => import("./pages/cheat_sheets/devops/databases"));
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
          <Route path="/korean/animals" element={<KoreanAnimalsPage />} />
          <Route path="/korean/questions" element={<KoreanQuestionsPage />} />
          <Route path="/korean/school" element={<KoreanSchoolPage />} />
          <Route path="/korean/places" element={<KoreanPlacesPage />} />
          <Route path="/korean/adjectives" element={<KoreanAdjectivesPage />} />
          <Route path="/korean/food" element={<KoreanFoodPage />} />
          <Route path="/korean/vocabulary" element={<KoreanVocabularyPage />} />
          <Route path="/devops" element={<DevOpsPage />} />
          <Route path="/devops/docker" element={<DevOpsDockerPage />} />
          <Route path="/devops/traefik" element={<DevOpsTraefikPage />} />
          <Route path="/devops/prometheus" element={<DevOpsPrometheusPage />} />
          <Route path="/devops/certbot" element={<DevOpsCertbotPage />} />
          <Route path="/devops/databases" element={<DevOpsDatabasesPage />} />
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
