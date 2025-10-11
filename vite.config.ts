import { wrapVinxiConfigWithSentry } from '@sentry/tanstackstart-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsConfigPaths from 'vite-tsconfig-paths'

const config = defineConfig({
  // base: "/apex/",
  plugins: [
    // this is the plugin that enables path aliases
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    tailwindcss(),
    tanstackStart({
      // Enable built-in sitemap generation
      sitemap: {
        enabled: true,
        host: 'https://www.peridio.com',
      },
      prerender: {
        // Enable prerendering
        enabled: true,

        // Enable if you need pages to be at `/page/index.html` instead of `/page.html`
        autoSubfolderIndex: true,

        // How many prerender jobs to run at once
        concurrency: 14,

        // Whether to extract links from the HTML and prerender them also
        crawlLinks: true,

        // Filter function takes the page object and returns whether it should prerender
        filter: ({ path }) => !path.startsWith('/do-not-render-me'),

        // Number of times to retry a failed prerender job
        retryCount: 2,

        // Delay between retries in milliseconds
        retryDelay: 1000,

        // Callback when page is successfully rendered
        onSuccess: ({ page }) => {
          console.log(`Rendered ${page.path}!`)
        },
      },
      // Configure sitemap metadata for each page
      pages: [
        {
          path: '/',
          sitemap: {
            priority: 1,
            changefreq: 'daily',
          },
        },
        {
          path: '/ai-ready',
          sitemap: {
            priority: 0.8,
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/avocado-os',
          sitemap: {
            priority: 0.9,
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/book-a-meeting',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/company',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/contact',
          sitemap: {
            priority: 0.6,
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/industry-consumer-electronics',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/industry-energy-and-renewables',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/industry-health-and-wearables',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/industry-industrial-iot',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/industry-smarthomes',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/industry-telematics',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/partners',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/peridio-core',
          sitemap: {
            priority: 0.7,
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/podcast-beyond-the-bench',
          sitemap: {
            priority: 0.7,
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/ui',
          sitemap: {
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/sign-up',
          sitemap: {
            priority: 0.9,
            changefreq: 'daily',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/developer-program',
          sitemap: {
            priority: 0.8,
            changefreq: 'weekly',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/first-boot',
          sitemap: {
            priority: 0.7,
            changefreq: 'monthly',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/long-term-support',
          sitemap: {
            priority: 0.7,
            changefreq: 'monthly',
            lastmod: '2025-10-24',
          },
        },
        {
          path: '/avocado-linux-whitepaper',
          sitemap: {
            priority: 0.8,
            changefreq: 'monthly',
            lastmod: '2025-10-24',
          },
        },
      ],
    }),
    viteReact(),
  ],
})

export default wrapVinxiConfigWithSentry(config, {
  org: process.env.VITE_SENTRY_ORG,
  project: process.env.VITE_SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: !process.env.CI,
})
