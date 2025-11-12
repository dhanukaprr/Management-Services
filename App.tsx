import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProvinceListPage from './pages/ProvinceListPage';
import ProvincePage from './pages/ProvincePage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="provinces" element={<ProvinceListPage />} />
          <Route path="provinces/:provinceId" element={<ProvincePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;