import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import glslify from "vite-plugin-glslify";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), glslify(), dts()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    global: "window",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "react-transition-components",
    },
    // todo: determine if we need to do anything else here for externals
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "leva",
        "three",
        "@react-three/fiber",
        "@react-three/drei",
      ],
    },
  },
});
