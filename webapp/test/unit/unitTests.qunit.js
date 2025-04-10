/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/btp/sapui5/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});


// sap.ui.define([
// 	"sap/ui/thirdparty/qunit",
// 	"sap/ui/qunit/qunit-css",
// 	"sap/ui/test/Opa5",
// 	"sap/btp/sapui5/test/unit/AllTests"
//   ], function () {
// 	"use strict";
  
// 	QUnit.config.autostart = false;
// 	QUnit.start();
//   });