import {defineConfig} from "tsup";

export default defineConfig({
    "entry": ["state/*.{ts,tsx}"],
    // entry:{
    //   "index":"./index.ts",
    //   "remote/fb":"./remote/fallback.tsx"
    // },
    "splitting": false,
    "sourcemap": false,
    "clean": true,
    "format": ["cjs","esm"],
    "treeshake": true,
    "bundle": false,
    "dts":true,
    "outDir": "es"
})
