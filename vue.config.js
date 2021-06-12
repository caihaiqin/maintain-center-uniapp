"use strict";
const path = require("path");

function resolve(dir) {
	return path.join(__dirname, dir);
}

const name = "项目名称";
const SentryWebpackPlugin = require("@sentry/webpack-plugin");
module.exports = {
	
	lintOnSave: process.env.NODE_ENV === "development",
	// 路径别名
	configureWebpack: {
		name: name,
		// plugins: [
		//       // #ifdef H5
		//      new SentryWebpackPlugin({
		//        // sentry-cli configuration
		//        authToken: '1b8d037ac1724f6ea0eb7bcbb6028582403346747f024036b86bd6b994c9ae98',
		//        org: "joinones",
		//        project: "maintenance-h5",
		//        release: 'maintenance@1.3.0',
		     		
		//        // webpack specific configuration
		//        include: resolve("unpackage/dist/dev/.sourcemap"),
		//        ignore: ["node_modules", "webpack.config.js"],
		//      }),
		//      // #endif
		// 		 // #ifdef MP-WEIXIN
		// 		 new SentryWebpackPlugin({
		// 		   // sentry-cli configuration
		// 		   authToken: '1b8d037ac1724f6ea0eb7bcbb6028582403346747f024036b86bd6b994c9ae98',
		// 		   org: "joinones",
		// 		   project: "maintenance-wxapp",
		// 		   release: 'maintenance-wxapp@1.3.0',
				 		
		// 		   // webpack specific configuration
		// 		   include: resolve("unpackage/dist/dev/.sourcemap"),
		// 		   ignore: ["node_modules", "webpack.config.js"],
		// 		 }),
		// 		 // #endif
		//     ],
		resolve: {
			alias: {

				"components": resolve("components"),
				"common": resolve("common"),
				"static": resolve("static"),
				"services": resolve("services"),
				"utils": resolve("utils"),
				"pages":resolve("pages"),
				"store":resolve("store"),
				
				"@": resolve("/"),
				
				

			},
		},
	},
};
