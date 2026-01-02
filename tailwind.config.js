<<<<<<< HEAD
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores de Flow
        'flow': {
          sage: '#88AB8E',      // Verde principal
          sky: '#A8D8EA',       // Azul suave
          peach: '#FFCDB2',     // Naranja cálido
          cream: '#F5F5DC',     // Crema (fondo)
          terra: '#E07A5F',     // Terracota (CTAs)
          pearl: '#D4D4D4',     // Gris suave
          charcoal: '#3D405B',  // Texto principal
        },
        // Colores Figma - Welcome
        'figma': {
          'gradient-from': '#D2B48C',  // stone-300
          'gradient-to': '#BAE6FD',    // sky-200
          'title': '#1E293B',          // slate-900
          'subtitle': '#3F3F46',       // slate-700
          'button': '#0E7490',         // cyan-700
          'button-hover': '#0E7490',   // cyan-800
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
=======
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores de Flow
        'flow': {
          sage: '#88AB8E',      // Verde principal
          sky: '#A8D8EA',       // Azul suave
          peach: '#FFCDB2',     // Naranja cálido
          cream: '#F5F5DC',     // Crema (fondo)
          terra: '#E07A5F',     // Terracota (CTAs)
          pearl: '#D4D4D4',     // Gris suave
          charcoal: '#3D405B',  // Texto principal
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
>>>>>>> 4d59d2a16b7324ee1d8b7b114d2574b2193e2677
}