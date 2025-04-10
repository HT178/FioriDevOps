sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney",
	"./View1Journey"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "sap.btp.sapui5.view.",
		autoWait: true
	});
});
