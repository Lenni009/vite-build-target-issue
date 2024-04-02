import { defineConfig } from "vite";
import { compilerOptions } from "./tsconfig.json";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vite-build-target-issue/",
  build: {
    // uncomment the next line to check that the build value is not taken from tsconfig automatically
    target: compilerOptions.target,
  },
});
