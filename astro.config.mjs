import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
});
