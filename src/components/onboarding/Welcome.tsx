import React from 'react';
import logo from '../../assets/Logos/logo.png';

interface WelcomeProps {
  onNext: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div 
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'linear-gradient(to bottom, #d6d3d1, #bae6fd)',
        padding: '2rem 1.5rem',
        boxSizing: 'border-box'
      }}
    >
      {/* Top Section - Logo & Text */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        {/* Logo Image */}
        <img 
          src={logo}
          alt="FocusFlow logo"
          style={{ width: '200px', height: '200px', objectFit: 'contain', marginBottom: '0.5rem' }}
        />
        
        {/* Brand Name */}
        <p style={{ 
          fontSize: '11px', 
          letterSpacing: '0.15em', 
          color: '#6b7280', 
          textTransform: 'uppercase',
          marginBottom: '2rem',
          fontFamily: 'Poppins, sans-serif'
        }}>
          Diseñado con amor para mentes inquietas
        </p>
        
        {/* Title */}
        <h1 style={{ 
          fontSize: '1.875rem', 
          fontWeight: 600, 
          color: '#0F172A',
          marginBottom: '1rem',
          fontFamily: 'Poppins, sans-serif'
        }}>
          Bienvenido a Flow
        </h1>
        
        {/* Subtitle */}
        <p style={{ 
          fontSize: '1rem', 
          color: '#334155',
          lineHeight: 1.6,
          fontFamily: 'Poppins, sans-serif'
        }}>
          Organiza tus ideas con claridad.
          <br />
          Fluye sin fricción
        </p>
      </div>
      
      {/* Bottom Section - Button */}
      <button 
        onClick={onNext}
        style={{
          width: '100%',
          maxWidth: '320px',
          height: '56px',
          backgroundColor: '#3A7CA5',
          borderRadius: '1rem',
          border: 'none',
          cursor: 'pointer',
          marginBottom: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <span style={{ 
          color: '#FFFFFF', 
          fontSize: '1.25rem', 
          fontWeight: 600,
          fontFamily: 'Poppins, sans-serif'
        }}>
          Empezar
        </span>
      </button>
    </div>
  );
};