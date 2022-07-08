const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");

const { merge } = require("webpack-merge");

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",
	output: {
		filename: "[name].bundle.js",
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "style/main.css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.png$/i,
				type: "asset/resource",
				generator: {
					filename: "asset/[name][ext]",
				},
			},
		],
	},
});
