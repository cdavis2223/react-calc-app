import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/cdavis2223/react-calc-app', // Reemplaza con el nombre de tu repositorio
});