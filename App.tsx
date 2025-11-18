
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DistrictListPage from './pages/DistrictListPage';
import DistrictPage from './pages/DistrictPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="districts" element={<DistrictListPage />} />
          <Route path="districts/:districtId" element={<DistrictPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
