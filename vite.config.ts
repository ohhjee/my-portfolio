import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import Components from "unplugin-vue-components/vite";
import VitePluginHtmlEnv from "vite-plugin-html-env";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    vueJsx(),
    vueDevTools(),
    VitePluginHtmlEnv({ compiler: true }),
    Components({
      dirs: ["src/components/app/base", "src/components/app/common"],
      dts: "types/components.d.ts",
      resolvers: [],
    }),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
