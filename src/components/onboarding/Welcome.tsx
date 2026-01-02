<<<<<<< HEAD
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
=======
import React from 'react';
import { Button } from '../common/Button';
import { Card } from '../common/Card';

interface WelcomeProps {
  onNext: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-flow-sage to-flow-sky flex items-center justify-center p-4">
      <Card className="max-w-md w-full text-center" padding="lg">
        {/* Logo placeholder - tu hijo puede añadir SVG después */}
        <div className="w-24 h-24 bg-flow-sage rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl">🌊</span>
        </div>
        
        <h1 className="text-3xl font-bold text-flow-charcoal mb-4">
          Bienvenido a Flow
        </h1>
        
        <p className="text-flow-charcoal text-lg mb-2">
          Esta app te ayuda a identificar y mantener hábitos que te hacen sentir bien.
        </p>
        
        <p className="text-flow-charcoal opacity-75 mb-8">
          Sin plazos. Sin objetivos obligatorios. Solo pequeños pasos que eliges tú.
        </p>
        
        <Button onClick={onNext} fullWidth variant="primary">
          Empezar
        </Button>
      </Card>
    </div>
  );
>>>>>>> 4d59d2a16b7324ee1d8b7b114d2574b2193e2677
};