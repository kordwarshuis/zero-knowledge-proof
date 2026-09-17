import { fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { renderCrawlerHtml } from './scripts/crawlerContent.js'

function crawlerContentPlugin() {
  const messagesUrl = new URL('./src/i18n/messages.js', import.meta.url)
  const messagesPath = fileURLToPath(messagesUrl)

  async function loadMessages() {
    return import(`${messagesUrl.href}?t=${Date.now()}`)
  }

  return {
    name: 'crawler-content',
    async transformIndexHtml(html) {
      const { LOCALES, messages } = await loadMessages()
      const block = renderCrawlerHtml(messages, LOCALES)
      return html.replace('<!-- crawler-content -->', block)
    },
    configureServer(server) {
      server.watcher.add(messagesPath)
      server.watcher.on('change', (file) => {
        if (file === messagesPath) {
          server.ws.send({ type: 'full-reload' })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), crawlerContentPlugin()],
  base: '/various/zero-knowledge-proof/',
})

