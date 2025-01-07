import { defineConfig } from 'vite';
    import { VitePWA } from 'vite-plugin-pwa';

    export default defineConfig({
      plugins: [
        VitePWA({
          registerType: 'autoUpdate',
          manifest: {
            name: 'Presentation Script Viewer',
            short_name: 'ScriptViewer',
            description: 'Offline presentation script viewer',
            theme_color: '#ffffff',
            icons: [
              {
                src: '/icon-192.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: '/icon-512.png',
                sizes: '512x512',
                type: 'image/png'
              }
            ]
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg}']
          }
        })
      ]
    });
