const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	mode: "development",
	output: {
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/template/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				use: "html-loader",
			},
		],
	},
};
