import esbuild, { Plugin } from "esbuild";
import babel from "esbuild-plugin-babel";

const context = await esbuild.context({
    bundle: true,
    platform: "node",
    target: "rhino1.7.14",
    external: ["kolmafia"],
    entryPoints: {
        "scripts/bbPreAdv/Std2024": "src/Std2024.ts"
    },
    entryNames: "[dir]/[name]",
    outdir: "dist",
    plugins: [babel() as Plugin],
});

await context.rebuild();
context.dispose();