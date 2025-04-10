// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
// ], (Controller) => {
//     "use strict";

//     return Controller.extend("sap.btp.sapui5.controller.View1", {
//         onInit() {
//         }
//     });
// });


sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/core/BusyIndicator"
], function (UIComponent, History, Controller, MessageBox, BusyIndicator) {
    "use strict";

    return Controller.extend("sap.btp.sapui5.controller.View1", {
        onInit: function () {
            // Initialization code
        },

        onNavBack: function () {
            const sPreviousHash = History.getInstance().getPreviousHash();
            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("Routev1000", {}, true);
            }
        },

        onFrontCalculateTotalAchievement: function () {
            const oView = this.getView();
            const aStores = ["A", "B"];
            const months = ["September", "October", "November"]
            let iTotalRevenue = 0;
            let iTotalCost = 0;

            // 合計売上/コストを計算
            aStores.forEach(store => {
                let iStoreRevenue = 0;
                let iStoreCost = 0;

                months.forEach(month => {
                    const sRevenueId = `revenue${month}Store${store}`;
                    const sCostId = `cost${month}Store${store}`;

                    const iRevenue = parseFloat(oView.byId(sRevenueId).getValue()) || 0;
                    const iCost = parseFloat(oView.byId(sCostId).getValue()) || 0;

                    iStoreRevenue += iRevenue;
                    iStoreCost += iCost;
                });

                iTotalRevenue += iStoreRevenue;
                iTotalCost += iStoreCost;

                console.log(`Store ${store} - Total Revenue: ${iStoreRevenue}, Total Cost: ${iStoreCost}`);
            });

            // 0除算チェック
            if (iTotalRevenue == 0) {
                MessageBox.error("売上高が0円のため利益率を計算できません。");
                return
            }

            // 利益率を計算
            const iProfit = iTotalRevenue - iTotalCost;
            const fProfitPercentage = (iProfit / iTotalRevenue) * 100;

            // 計算した値を画面に表示
            oView.byId("totalRevenue").setValue(iTotalRevenue.toFixed(2));
            oView.byId("totalCost").setValue(iTotalCost.toFixed(2));
            oView.byId("percentageRateProfit").setValue(fProfitPercentage.toFixed(2));
        },

        onBackCalculateTotalAchievement: function () {
            const oView = this.getView();
            const oModel = this.getOwnerComponent().getModel("mainService");
            const aStores = ["A", "B", "C"];
            const months = ["September", "October", "November"];
            const aStorePerformancePayload = [];

            // Construct the payload
            aStores.forEach(store => {
                months.forEach(month => {
                    const sRevenueId = `revenue${month}Store${store}`;
                    const sCostId = `cost${month}Store${store}`;

                    const sRevenue = oView.byId(sRevenueId).getValue();
                    const sCost = oView.byId(sCostId).getValue();

                    aStorePerformancePayload.push({
                        storeId: store,
                        revenue: sRevenue,
                        cost: sCost
                    });
                });
            });

            const oPayload = {
                storePerformanceInfo: aStorePerformancePayload
            };

            BusyIndicator.show();

            // Call the action with the payload
            oModel.create("/regStorePerformenceInfo", oPayload, {
                success: function (oData) {
                    BusyIndicator.hide();
                    MessageBox.success("Success! Return value: " + JSON.stringify(oData));
                },
                error: function (oError) {
                    BusyIndicator.hide();
                    var jsonObject = JSON.parse(oError.responseText);
                    MessageBox.error(jsonObject.error.message.value);
                }
            });
        },

        onBackCalculateEachStoreAchievement: function () {
            const oView = this.getView();
            const oModel = this.getOwnerComponent().getModel("mainService");
            const aStores = ["A", "B", "C"];
            const months = ["September", "October", "November"];
            const aStorePerformancePayload = [];

            // Construct the payload
            aStores.forEach(store => {
                months.forEach(month => {
                    const sRevenueId = `revenue${month}Store${store}`;
                    const sCostId = `cost${month}Store${store}`;

                    const sRevenue = oView.byId(sRevenueId).getValue();
                    const sCost = oView.byId(sCostId).getValue();

                    aStorePerformancePayload.push({
                        storeId: store,
                        revenue: sRevenue,
                        cost: sCost
                    });
                });
            });

            const oPayload = {
                storePerformanceInfo: aStorePerformancePayload
            };

            BusyIndicator.show();

            // Call the action with the payload
            oModel.create("/keybreak", oPayload, {
                success: function (oData) {
                    BusyIndicator.hide();
                    MessageBox.success("Success! Return value: " + JSON.stringify(oData));
                },
                error: function (oError) {
                    BusyIndicator.hide();
                    var jsonObject = JSON.parse(oError.responseText);
                    MessageBox.error(jsonObject.error.message.value);
                }
            });
        },

        onFrontCalculateEachStoreAchievement: function () {
            const oView = this.getView();
            const aStores = ["A", "B", "C"];
            const months = ["September", "October", "November"];
            const storeTotals = {};

            aStores.forEach(store => {
                let iStoreRevenue = 0;
                let iStoreCost = 0;

                months.forEach(month => {
                    const sRevenueId = `revenue${month}Store${store}`;
                    const sCostId = `cost${month}Store${store}`;

                    const iRevenue = parseFloat(oView.byId(sRevenueId).getValue()) || 0;
                    const iCost = parseFloat(oView.byId(sCostId).getValue()) || 0;

                    iStoreRevenue += iRevenue;
                    iStoreCost += iCost;
                });

                storeTotals[store] = { totalRevenue: iStoreRevenue, totalCost: iStoreCost };
            });

            MessageBox.success("Store totals calculated successfully: " + JSON.stringify(storeTotals))
        }
    });
});