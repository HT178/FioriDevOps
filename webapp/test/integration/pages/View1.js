sap.ui.define([
    "sap/ui/test/Opa5",
    "sap/ui/test/actions/EnterText",
    "sap/ui/test/actions/Press",
	"sap/ui/test/matchers/PropertyStrictEquals"
], function (Opa5, EnterText, Press, PropertyStrictEquals) {
    "use strict";
    var sViewName = "View1";
    
    Opa5.createPageObjects({
        onTheViewPage: {

            actions: {
                iEnterValuesInInputFields: function () {
                    var aRevenueIds = [
                        "revenueSeptemberStoreA",
                        "revenueOctoberStoreA",
                        "revenueNovemberStoreA",
                        "revenueSeptemberStoreB",
                        "revenueOctoberStoreB",
                        "revenueNovemberStoreB"
                    ];
                    var aCostIds = [
                        "costSeptemberStoreA",
                        "costOctoberStoreA",
                        "costNovemberStoreA",
                        "costSeptemberStoreB",
                        "costOctoberStoreB",
                        "costNovemberStoreB"
                    ];

                    aRevenueIds.forEach(function (sId) {
                        this.waitFor({
                            id: sId,
                            viewName: sViewName,
							controlType: "sap.m.Input",
                            actions: new EnterText({ text: "1000" }),
                            errorMessage: "Could not find the input field " + sId + " on the " + sViewName + " view"
                        });
                    }.bind(this));

                    aCostIds.forEach(function (sId) {
                        this.waitFor({
                            id: sId,
                            viewName: sViewName,
							controlType: "sap.m.Input",
                            actions: new EnterText({ text: "100" }),
                            errorMessage: "Could not find the input field " + sId + " on the " + sViewName + " view"
                        });
                    }.bind(this));
                },

                iPressTheCalculateButton: function () {
                    return this.waitFor({
                        id: "calculateButton",
                        viewName: sViewName,
                        actions: new Press(),
                        errorMessage: "Could not find the calculate button on the " + sViewName + " view"
                    });
                }
            },

            assertions: {
                iShouldSeeThePageView: function () {
                    return this.waitFor({
                        id: "page",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
                        },
                        errorMessage: "Did not find the " + sViewName + " view"
                    });
                },

                iShouldSeeCorrectTotalRevenue: function () {
                    return this.waitFor({
                        id: "totalRevenue",
                        viewName: sViewName,
                        controlType: "sap.m.Input",
                        enabled: false,
                        matchers: new PropertyStrictEquals({
                            name: "enabled",
                            value: false
                        }),
                        success: function (oInput) {
                            var sValue = oInput.getValue();
                            Opa5.assert.strictEqual(sValue, "6000.00", "The total revenue is correct");
                        },
                        errorMessage: "The total revenue is not correct"
                    });
                },

                iShouldSeeCorrectTotalCost: function () {
                    return this.waitFor({
                        id: "totalCost",
                        viewName: sViewName,
						controlType: "sap.m.Input",
						enabled: false,
						matchers: new PropertyStrictEquals({
                            name: "enabled",
                            value: false
                        }),
                        success: function (oInput) {
                            var sValue = oInput.getValue();
                            Opa5.assert.strictEqual(sValue, "600.00", "The total cost is correct");
                        },
                        errorMessage: "The total cost is not correct"
                    });
                },

                iShouldSeeCorrectPercentageRateProfit: function () {
                    return this.waitFor({
                        id: "percentageRateProfit",
                        viewName: sViewName,
						controlType: "sap.m.Input",
						enabled: false,
						matchers: new PropertyStrictEquals({
                            name: "enabled",
                            value: false
                        }),
                        success: function (oInput) {
                            var sValue = oInput.getValue();
                            Opa5.assert.strictEqual(sValue, "90.00", "The percentage rate profit is correct");
                        },
                        errorMessage: "The percentage rate profit is not correct"
                    });
                }
            }
        }
    });

});