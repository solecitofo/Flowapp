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
          'title': '#0F172A',          // Azul oscuro - Título
          'subtitle': '#334155',       // Gris azulado - Subtítulo
          'button': '#3A7CA5',         // Azul - Botón
          'white': '#FFFFFF',          // Blanco - Texto botón
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}