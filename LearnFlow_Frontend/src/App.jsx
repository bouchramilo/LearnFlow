import React from 'react';
import './App.css';
import './css/Header.css';
import './css/Footer.css';
import './css/Hero.css';
import './css/Auth-form.css';
import './css/Buttons.css';
import './css/Courses.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Signup from './pages/Auth/SignUp';
import Login from './pages/Auth/LogIn';
import Home from './pages/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;