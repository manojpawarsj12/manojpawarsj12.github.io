import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// User site (manojpawarsj12.github.io) is served from the domain root, so base is "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
