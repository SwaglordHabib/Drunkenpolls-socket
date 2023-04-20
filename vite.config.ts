import { defineConfig } from "vite";
import vitePluginSocketIO from "@swaglordhabib/vite-plugin-socket-io";
import { socketEvents } from "./src/socketEvents";

export default defineConfig({
  plugins: [
    vitePluginSocketIO(
      { socketEvents },
      {
        cors: {
          origin: "*",
        },
      }
    ),
  ],
});
