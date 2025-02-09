// @ts-check
import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

const testClient = "stradivarius"

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    devToolbar: {
        enabled: false,
    },
    trailingSlash: 'never',
    srcDir: `src/${testClient}`
});
