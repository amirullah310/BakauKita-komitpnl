import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" agar build bisa dibuka dari GitHub Pages maupun folder lokal
export default defineConfig({ plugins: [react()], base: "./" });
