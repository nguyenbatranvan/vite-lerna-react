import typescript from 'rollup-plugin-typescript2';
import { dts } from "rollup-plugin-dts";
export default {
    input: ["src/components/index.tsx"],
    output: [
        {
            dir: "es",
            entryFileNames: "[name].js",
            format: "cjs",
            exports: "named"
        }
    ],
    plugins: [
        typescript(),
        dts()
    ],
    external: ["react"]
};
