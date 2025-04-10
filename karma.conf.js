module.exports = function(config) {
  config.set({
    frameworks: ["ui5", "qunit"],
    ui5: {
      url: "https://ui5.sap.com",
      // mode: "script",
      // mode: "script",
      // config: {
      //   async: true,
      //   resourceRoots: {
      //     "sap.btp.sapui5": "./webapp"
      //   }
      // },
      // tests: [
      //   "sap/btp/sapui5/test/unit/AllTests"
      // ]
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