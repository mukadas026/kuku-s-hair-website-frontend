// @ts-ignore
import { defineConfig } from "vite"
// @ts-ignore
import react from "@vitejs/plugin-react-swc"
// @ts-ignore
import viteTsconfigPaths from "vite-tsconfig-paths"
// @ts-ignore
import svgrPlugin from "vite-plugin-svgr"
// @ts-ignore
import eslint from "vite-plugin-eslint"
// @ts-ignore
import { checker } from "vite-plugin-checker"

/**
 * @param match
 * Regular expression in string or Regexp type,
 *  or a match predicate  (this: vite transform context, code: string, id: file name string) => void
 * @returns transformed code
 */
import requireTransform from "vite-plugin-require-transform"

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: "build",
	},
	plugins: [
		react(),
		viteTsconfigPaths(),
		svgrPlugin(),
		eslint(),
		checker({
			typescript: true,
		}),
		requireTransform({}),
	],
})

// check the vite-plugin-require-transform params'type
export type VitePluginRequireTransformParamsType = {
	//filter files that should enter the plugin
	
	// fileRegex?: RegExp = /.ts$|.tsx$/
	
	//prefix that would plugin into the requireSpecifier
	
	// importPrefix? = "_vite_plugin_require_transform_"
	//to deal with the requireSpecifier
	importPathHandler?: Function
}
