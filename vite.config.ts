import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from 'dotenv';
import url from "url"

dotenv.config();
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@contexts": path.resolve(__dirname, "./src/contexts"),
			"@fonts": path.resolve(__dirname, "./src/fonts"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@content": path.resolve(__dirname, "./src/content"),
			"@types": path.resolve(__dirname, "./src/types"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@public": path.resolve(__dirname, "./public")
		},
	},
	base: "/YESEnglish/",
	plugins: [
		react(),
	],
});
