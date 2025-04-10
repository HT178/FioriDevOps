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


// module.exports = function(config) {
//   config.set({

//     frameworks: ["qunit"],
//     browsers: ["ChromeHeadlessNoSandbox"],
//     singleRun: true,
//     customLaunchers: {
//       ChromeHeadlessNoSandbox: {
//         base: 'ChromeHeadless',
//         flags: ['--no-sandbox']
//       }
//     },
//     files: [
//       'resources/sap-ui-core.js',
//       'resources/sap/ui/thirdparty/qunit-2.js', 
//       "resources/sap/ui/qunit/qunit-junit.js",
//       "resources/sap/ui/qunit/qunit-coverage.js",
//       "resources/sap/ui/thirdparty/sinon.js",
//       "resources/sap/ui/thirdparty/sinon-qunit.js",
//       'webapp/test/unit/unitTests.qunit.js'
//     ]

// });
// };

module.exports = function(config) {
  config.set({
    // frameworks: ["ui5", "qunit"],
    frameworks: ["ui5"],
    ui5: {
      url: "https://ui5.sap.com",
      // mode: "script",
      mode: "html",
      config: {
        async: true,
        resourceRoots: {
          "sap.btp.sapui5": "./webapp"
        }
      },
      // tests: [
      //   "sap/btp/sapui5/test/unit/unitTests.qunit"
      // ]
      testpage: "sap/btp/sapui5/test/unit/unitTests.qunit.html"
    },
    browsers: ["ChromeHeadlessNoSandbox"],
    singleRun: true,
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },
  });
};