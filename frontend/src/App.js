import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VacanciesPage from './pages/VacanciesPage';
import SchoolLifePage from './pages/SchoolLifePage';
import ProgramsPage from './pages/ProgramsPage';
import DocumentsPage from './pages/DocumentsPage';
import PreschoolPrepPage from './pages/PreschoolPrepPage';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App page-fade-in">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vacancies" element={<VacanciesPage />} />
          <Route path="/school-life" element={<SchoolLifePage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/preschool-prep" element={<PreschoolPrepPage />} />
        </Routes>
        <Footer />
        <DarkModeToggle />
      </div>
    </Router>
  );
}

export default App;
