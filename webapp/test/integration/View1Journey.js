/*global QUnit*/

sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/App",
    "./pages/View1"
], function (opaTest) {
    "use strict";

    QUnit.module("View1 Journey");

    opaTest("Should see the initial page of the app", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyApp();

        // Assertions
        Then.onTheAppPage.iShouldSeeTheApp();
        Then.onTheViewPage.iShouldSeeThePageView();

        // Cleanup
        Then.iTeardownMyApp();
    });

    opaTest("Should enter values and calculate results", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyApp();

        // Actions
        When.onTheViewPage.iEnterValuesInInputFields();
        When.onTheViewPage.iPressTheCalculateButton();

        // Assertions
        Then.onTheViewPage.iShouldSeeCorrectTotalRevenue();
        Then.onTheViewPage.iShouldSeeCorrectTotalCost();
        Then.onTheViewPage.iShouldSeeCorrectPercentageRateProfit();

        // Cleanup
        Then.iTeardownMyApp();
    });
});