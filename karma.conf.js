// process.env.CHROME_BIN = require('puppeteer').executablePath();
// module.exports = function(config) {
//     config.set({
//         frameworks: ["ui5"],
//         ui5: {
//             configPath: "ui5.yaml" // change to ui5.yaml if ui5-mock.yaml does not exist.
//         },
//         browsers: ["ChromeHeadlessCustom"],
//         customLaunchers: {
//             ChromeHeadlessCustom: {
//                 base: 'ChromeHeadless',
//                 flags: ["--no-sandbox", "--disable-gpu", "--headless", "--remote-debugging-port=9222"]
//             }
//         },
//         browserConsoleLogOptions: {
//             level: "error"
//         },
//         singleRun: true,
//         proxies: {
//             '/base/webapp/resources': 'http://127.0.0.1:' + config.port + '/resources',
//             '/base/webapp/test-resources': 'http://127.0.0.1:' + config.port + '/test-resources'
//         }
//     });
// };

// // module.exports = function(config) {
// // 	"use strict";

// // 	config.set({
// //         frameworks: ["ui5"],
// // 		ui5: {
// // 			url: "https://sapui5.hana.ondemand.com"
// // 		},
// // 		preprocessors: {
// // 			"{webapp,webapp/!(test)}/!(mock*).js": ["coverage"]
// // 		},
// // 		coverageReporter: {
// // 			includeAllSources: true,
// // 			reporters: [
// // 				{
// // 					type: "html",
// // 					dir: "coverage"
// // 				},
// // 				{
// // 					type: "text"
// // 				}
// // 			],
// // 			check: {
// // 				each: {
// // 					statements: 100,
// // 					branches: 100,
// // 					functions: 100,
// // 					lines: 100
// // 				}
// // 			}
// // 		},
// // 		reporters: ["progress", "coverage"],

// //         browsers: ["ChromiumHeadless"],
        
// //         browserConsoleLogOptions: {
// // 			level: "error"
// //         },

// // 		singleRun: true
// // 	});
// // };

// module.exports = function(config) {
//     config.set({

//       frameworks: ["ui5"],

//       browsers: ["Chrome"]

// });
// };


module.exports = function(config) {
  config.set({

    frameworks: ["ui5"],
    browsers: ["ChromeHeadlessNoSandbox"],
    singleRun: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    }

});
};