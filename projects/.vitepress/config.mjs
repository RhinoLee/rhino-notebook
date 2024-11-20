import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/rhino-notebook/',
  title: 'Rhino Notebook',
  description: 'Rhino Notebook',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
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
          ],
        },
        {
          text: 'FP',
          items: [
            { text: 'chapter 1 ~ 5', link: '/front-end/fp/basic/index' },
            { text: 'chapter 6 ~ 7 - immutability', link: '/front-end/fp/basic/immutability' },
            { text: 'chapter 8 - stratified design', link: '/front-end/fp/basic/stratifiedDesign' },
          ],
        },
        {
          text: 'Micro Frontend',
          items: [
            { text: 'chapter 1', link: '/front-end/micro-frontend/basic/index' },
          ],
        },
      ],
      '/back-end/': [
        {
          text: 'Python',
          items: [
            {
              text: 'Learn Python for Yourself',
              collapsed: true,
              items: [
                { text: 'Sequence Unpacking', link: '/back-end/python/learn-python-for-yourself/sequence-unpacking/index' },
                {
                  text: 'List',
                  collapsed: true,
                  items: [
                    { text: 'List Comprehension', link: '/back-end/python/learn-python-for-yourself/list/list-comprehension/index' },
                  ],
                },
                {
                  text: 'Dictionary',
                  collapsed: true,
                  items: [
                    { text: 'Dictionary Comprehension', link: '/back-end/python/learn-python-for-yourself/dictionary/dictionary-comprehension/index' },
                  ],
                },
                {
                  text: 'Function',
                  collapsed: true,
                  items: [
                    { text: 'Basics', link: '/back-end/python/learn-python-for-yourself/function/basics/index' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RhinoLee' },
    ],
  },
  vite: {
    plugins: [
      UnoCSS(),
      Components({
        dirs: resolve(__dirname, 'theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        transformer: 'vue3',
      }),
    ],
    resolve: {
      alias: {
        '@vueuse-practice/docs-utils': resolve(__dirname, 'plugins/utils.js'),
      },
    },
  },
})
