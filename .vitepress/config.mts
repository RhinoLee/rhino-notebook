import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/rhino-notebook/',
  title: "Rhino Notebook",
  description: "Rhino Notebook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/projects/front-end/': [
        {
          text: 'VueUse',
          items: [
            { text: 'useEventListener', link: '/projects/front-end/vueuse/core/useEventListener/index' },
            { text: 'useMouse', link: '/projects/front-end/vueuse/core/useMouse/index' },
            { text: 'useMouseInElement', link: '/projects/front-end/vueuse/core/useMouseInElement/index' },
            { text: 'useMounted', link: '/projects/front-end/vueuse/core/useMounted/index' },
            { text: 'useSupported', link: '/projects/front-end/vueuse/core/useSupported/index' },
            { text: 'useScreenOrientation', link: '/projects/front-end/vueuse/core/useScreenOrientation/index' },
            { text: 'useDeviceOrientation', link: '/projects/front-end/vueuse/core/useDeviceOrientation/index' },
            { text: 'useParallax', link: '/projects/front-end/vueuse/core/useParallax/index' },
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
