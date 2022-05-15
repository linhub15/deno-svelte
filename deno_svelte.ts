import { compile } from "https://esm.sh/svelte/compiler"

const source = await Deno.readTextFile("./src/App.svelte");

let { js, css, warnings } = compile(source, {});


await Deno.writeTextFile("./dist/index.js", js.code );
