import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from "dotenv"

dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
  },
  define: {
    "process.env.VITE_NODE_ENV": JSON.stringify(process.env.VITE_NODE_ENV),
    "process.env.VITE_LOCAL_URL": JSON.stringify(process.env.VITE_LOCAL_URL)
  },
})
