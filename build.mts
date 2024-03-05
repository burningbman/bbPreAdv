import esbuild, { Plugin } from "esbuild";
import babel from "esbuild-plugin-babel";

const context = await esbuild.context({
    bundle: true,
    platform: "node",
    target: "rhino1.7.14",
    external: ["kolmafia"],
    entryPoints: {
        "scripts/bbPreAdv/Std2024": "src/preAdvStd2024.ts",
        "scripts/bbPreAdv/WereProf": "src/preAdvWereProf.ts"
    },
    entryNames: "[dir]/[name]",
    outdir: "dist",
    plugins: [babel() as Plugin],
});

await context.rebuild();
context.dispose();