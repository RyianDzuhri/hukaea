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
  site: 'http://desahukaea.web.id/',
  base: '/hukaea',

  vite: {
    plugins: [tailwindcss()]
  }
});