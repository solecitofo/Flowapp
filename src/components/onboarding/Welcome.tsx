import React from 'react';
import { Button } from '../common/Button';

interface WelcomeProps {
  onNext: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div className="w-full h-screen relative bg-gradient-to-br from-stone-300 to-sky-200 overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-[467px] h-[785px] relative">
        {/* Logo Image */}
        <img 
          className="w-80 h-80 left-[70px] top-[-67px] absolute object-cover" 
          src=" Flowapp/src/assets/Logos/logo.png " 
          alt="Flow logo"
        />
        
        {/* Title */}
        <div className="w-72 h-14 left-[82px] top-[188px] absolute flex items-center text-slate-900 text-3xl font-semibold font-poppins">
          Bienvenido a Flow
        </div>
        
        {/* Subtitle */}
        <div className="w-72 left-[79px] top-[249px] absolute text-center text-slate-700 text-base font-normal font-poppins">
          Organiza tus ideas con claridad. Fluye sin fricción
        </div>
        
        {/* Button Container */}
        <button 
          onClick={onNext}
          className="w-80 h-14 left-[70px] top-[672px] absolute bg-cyan-700 rounded-2xl hover:bg-cyan-800 transition-colors flex items-center justify-center"
        >
          <span className="text-center text-white text-xl font-semibold font-poppins">
            Empezar
          </span>
        </button>
      </div>
    </div>
  );
};