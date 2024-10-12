import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/rhino-notebook/',
  title: "Rhino Notebook",
  description: "Rhino Notebook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/front-end/': [
        {
          text: 'VueUse',
          items: [
            { text: 'useEventListener', link: '/front-end/vueuse/core/useEventListener/index' },
            { text: 'useMouse', link: '/front-end/vueuse/core/useMouse/index' },
            { text: 'useMouseInElement', link: '/front-end/vueuse/core/useMouseInElement/index' },
            { text: 'useMounted', link: '/front-end/vueuse/core/useMounted/index' },
            { text: 'useSupported', link: '/front-end/vueuse/core/useSupported/index' },
            { text: 'useScreenOrientation', link: '/front-end/vueuse/core/useScreenOrientation/index' },
            { text: 'useDeviceOrientation', link: '/front-end/vueuse/core/useDeviceOrientation/index' },
            { text: 'useParallax', link: '/front-end/vueuse/core/useParallax/index' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RhinoLee' }
    ]
  },
  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
})
