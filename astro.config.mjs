import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://desahukaea.web.id',

  vite: {
    plugins: [tailwindcss()]
  }
});