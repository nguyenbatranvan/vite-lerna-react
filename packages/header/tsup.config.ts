import {defineConfig} from "tsup";

export default defineConfig({
    "entry": ["src/components/*.{ts,tsx}"],
    "splitting": false,
    "sourcemap": false,
    "clean": true,
    "format": ["esm"],
    "treeshake": true,
    "bundle": false,
    "dts":true,
    "outDir": "es"
})
