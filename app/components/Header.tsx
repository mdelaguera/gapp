'use client';

import { useState } from 'react';
import Search from './Search';

function PaddleIcon() {
  return (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 40 40" 
      fill="none" 
      className="inline-block mr-3"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle for better visibility */}
      <circle cx="20" cy="18" r="18" fill="#28a745" opacity="0.1"/>
      
      {/* Paddle face - distinctive pickleball paddle shape */}
      <path 
        d="M20 4C25 4 28 7 28 12V24C28 29 25 32 20 32C15 32 12 29 12 24V12C12 7 15 4 20 4Z" 
        fill="#28a745"
        stroke="#1e7e34"
        strokeWidth="2"
      />
      
      {/* Handle */}
      <rect 
        x="17" 
        y="32" 
        width="6" 
        height="4" 
        fill="#1e7e34" 
        rx="3"
      />
      
      {/* Surface texture lines for realism */}
      <line x1="16" y1="10" x2="24" y2="10" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="13" x2="25" y2="13" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="16" x2="25" y2="16" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="19" x2="25" y2="19" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="22" x2="25" y2="22" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="15" y1="25" x2="25" y2="25" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      <line x1="16" y1="28" x2="24" y2="28" stroke="white" strokeWidth="0.8" opacity="0.7"/>
      
      {/* Sweet spot indicator */}
      <circle cx="20" cy="18" r="4" fill="none" stroke="white" strokeWidth="1.2" opacity="0.8"/>
      
      {/* Brand text */}
      <text x="20" y="19" fontSize="4" fill="white" textAnchor="middle" opacity="0.9">P</text>
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar" style={{ backgroundColor: 'white', borderBottom: '1px solid #e9ecef', position: 'relative' }}>
      <div className="navbar__inner">
        <div className="navbar__brand">
          <a href="/" className="navbar__title" style={{ color: '#2d3748', textDecoration: 'none', fontSize: '1.5rem', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
            <PaddleIcon />
            Get A Pickleball Paddle
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar__nav navbar__nav--desktop">
          <div className="navbar__items">
            <a href="/ultimate-guide" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Ultimate Guide</a>
            <a href="/beginner-guide" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Beginner Guide</a>
            <a href="/budget-paddles" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Budget Paddles</a>
            <a href="/premium-comparison" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Premium Paddles</a>
          </div>
          <div className="navbar__items navbar__items--right">
            <div className="navbar__item">
              <Search />
            </div>
            <a href="/affiliate-disclosure" className="navbar__item navbar__link" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.5rem 1rem', fontSize: '1rem' }}>Disclosure</a>
          </div>
        </nav>

        {/* Hamburger Button */}
        <button 
          className="navbar__hamburger"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            gap: '4px'
          }}
        >
          <span className="hamburger-line" style={{
            width: '24px',
            height: '3px',
            backgroundColor: '#2d3748',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'
          }}></span>
          <span className="hamburger-line" style={{
            width: '24px',
            height: '3px',
            backgroundColor: '#2d3748',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? '0' : '1'
          }}></span>
          <span className="hamburger-line" style={{
            width: '24px',
            height: '3px',
            backgroundColor: '#2d3748',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'
          }}></span>
        </button>

        {/* Mobile Navigation Menu */}
        <nav className={`navbar__nav--mobile ${isMenuOpen ? 'navbar__nav--open' : ''}`} style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          backgroundColor: 'white',
          borderBottom: '1px solid #e9ecef',
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isMenuOpen ? '1' : '0',
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 1000,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div className="navbar__items--mobile" style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            padding: '1rem' 
          }}>
            <a href="/ultimate-guide" className="navbar__item navbar__link--mobile" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid #f0f0f0' }}>Ultimate Guide</a>
            <a href="/beginner-guide" className="navbar__item navbar__link--mobile" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid #f0f0f0' }}>Beginner Guide</a>
            <a href="/budget-paddles" className="navbar__item navbar__link--mobile" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid #f0f0f0' }}>Budget Paddles</a>
            <a href="/premium-comparison" className="navbar__item navbar__link--mobile" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid #f0f0f0' }}>Premium Paddles</a>
            <a href="/affiliate-disclosure" className="navbar__item navbar__link--mobile" style={{ color: '#4a5568', textDecoration: 'none', padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid #f0f0f0' }}>Disclosure</a>
            <div style={{ padding: '0.75rem 0' }}>
              <Search />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}