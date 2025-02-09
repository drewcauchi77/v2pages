// @ts-check
import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import node from '@astrojs/node';

// To come from Environment variable
const testClient = "stradivarius"

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    devToolbar: {
        enabled: false,
    },
    trailingSlash: 'never',
    srcDir: `src/${testClient}`,
    outDir: `src/${testClient}/dist`
});
