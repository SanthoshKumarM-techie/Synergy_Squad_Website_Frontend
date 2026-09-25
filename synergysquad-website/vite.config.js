import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

let launchState = false

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'local-stage-launch-sync',
      configureServer(server) {
        server.middlewares.use('/api/launch', (req, res) => {
          res.setHeader('Content-Type', 'application/json')
          res.setHeader('Access-Control-Allow-Origin', '*')
          if (req.method === 'POST') {
            launchState = true
            res.end(JSON.stringify({ status: 'ok', launched: true }))
          } else if (req.method === 'DELETE') {
            launchState = false
            res.end(JSON.stringify({ status: 'ok', launched: false }))
          } else {
            res.end(JSON.stringify({ launched: launchState }))
          }
        })
      }
    }
  ],
})