import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import process from "process";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(process.cwd(), "./src/presentation/components"),
      "@pages": path.resolve(process.cwd(), "./src/presentation/pages"),
      "@navigation": path.resolve(process.cwd(), "./src/presentation/navigation"),
      "@store": path.resolve(process.cwd(), "./src/store"),
      "@services": path.resolve(process.cwd(), "./src/services"),
      "@domaine": path.resolve(process.cwd(), "./src/domaine"),
    },
  },
});
