import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";
// import { postcss } from "@stencil-community/postcss";
// import autoprefixer from "autoprefixer";

export const config: Config = {
	namespace: "coreproject-icons",
	buildEs5: "prod",
	plugins: [
		sass()
		// postcss({
		// 	plugins: [
		// 		autoprefixer({
		// 			// cascade: false
		// 		})
		// 	]
		// })
	],
	extras: {
		enableImportInjection: true,
		experimentalSlotFixes: true
	},
	outputTargets: [
		{
			type: "dist-hydrate-script"
		},
		{
			type: "dist"
		},
		{
			type: "dist-custom-elements",
			customElementsExportBehavior: "bundle",
			externalRuntime: false,
			minify: true
		},
		{
			type: "docs-readme"
		},
		{
			type: "www",
			serviceWorker: null // disable service workers
		}
	],
	testing: {
		browserHeadless: "new"
	}
};
