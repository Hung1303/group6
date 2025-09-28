import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="nav-logo">
            <span className="logo-icon">🇻🇳</span>
            <span className="logo-text">Cơ cấu xã hội</span>
          </Link>
        </div>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-icon">🏠</span>
            Trang chủ
          </Link>
          
          <Link 
            to="/introduction" 
            className={`nav-link ${isActive('/introduction') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-icon">📖</span>
            Giới thiệu
          </Link>
          
          <Link 
            to="/theory" 
            className={`nav-link ${isActive('/theory') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-icon">📚</span>
            Lý thuyết
          </Link>
          
          <Link 
            to="/practice" 
            className={`nav-link ${isActive('/practice') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-icon">💼</span>
            Thực tiễn
          </Link>
          
          <Link 
            to="/quiz" 
            className={`nav-link ${isActive('/quiz') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav-icon">❓</span>
            Quiz
          </Link>
        </div>
        
        <div 
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
