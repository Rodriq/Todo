// const path = require('path');

// module.exports = {
//   mode: "production", // "production" | "development" | "none"  // Chosen mode tells webpack to use its built-in optimizations accordingly.
//   entry: "./src/app.js", // string | object | array  // defaults to ./src
//   // Here the application starts executing
//   // and webpack starts bundling
//   output: {
//     // options related to how webpack emits results
//     path: path.resolve(__dirname), // string
//     // the target directory for all output files
//     // must be an absolute path (use the Node.js path module)
//     filename: "bundle.js", // string    // the filename template for entry chunks
//  //..   publicPath: "/assets/", // string    // the url to the output directory resolved relative to the HTML page
//   //  library: "MyLibrary", // string,
//     // the name of the exported library
//     libraryTarget: "umd", // universal module definition    // the type of the exported library
// /* Advanced output configuration (click to show) */  },
// // module: {
// //     // configuration regarding modules
// //     rules: [
// //       // rules for modules (configure loaders, parser options, etc.)

// //       // matches if the condition is not matched
// //       ],
// //   /* Advanced module configuration (click to show) */  },
// resolve: {
//     // options for resolving module requests
//     // (does not apply to resolving to loaders)
//     modules: [
//     "node_modules",
//     path.resolve(__dirname, "app")
//     ],
//     // directories where to look for modules
//     extensions: [".js", ".json", ".jsx", ".css"],
//     // extensions that are used
//     alias: {
//       // a list of module name aliases
//       "module": "new-module",
//       // alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"
//       "only-module$": "new-module",
//       // alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"
//       "module": path.resolve(__dirname, "app/third/module.js"),
//       // alias "module" -> "./app/third/module.js" and "module/file" results in error
//       // modules aliases are imported relative to the current context
//   },
// },


// // plugins: [
// //     // ...
// //     ],
//   // list of additional plugins
// /* Advanced configuration (click to show) */}


// /*
// Try mine
// */ 

const path = require('path');


module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		library: 'todo'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: 'babel-loader',

		}]
	}
}