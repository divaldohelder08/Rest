import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "tailwindcss"
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss("./tailwind.config.js")],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
