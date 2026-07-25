// // @ts-check
// import { defineConfig } from 'astro/config';
// import tailwindcss from '@tailwindcss/vite';

// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ryiandzuhri.github.io',
  base: '/hukaea',

  vite: {
    plugins: [tailwindcss()]
  }
});