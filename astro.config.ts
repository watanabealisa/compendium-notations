import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import tailwindcss from '@tailwindcss/vite'
import expressiveCode from 'astro-expressive-code'
import sectionizePlugin from 'remark-sectionize'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'

// https://astro.build/config
export default defineConfig({
  site: 'https://watanabealisa.github.io',
  base: '/compendium-notations',
  
  integrations: [
    mdx(),
    sitemap(),
    expressiveCode({
      plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    }),
  ],
  markdown: {
    remarkPlugins: [sectionizePlugin, readingTimePlugin],
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
