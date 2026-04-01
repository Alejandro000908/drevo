import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import VacanciesPage from './pages/VacanciesPage';
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
        </Routes>
        <Footer />
        <DarkModeToggle />
      </div>
    </Router>
  );
}

export default App;
