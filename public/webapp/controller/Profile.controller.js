sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"smartie/loteca/website/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("smartie.loteca.website.controller.Profile", {

		formatter: formatter,

		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute('profile').attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function(oEvent){
			var oModel = this.getView().getModel('session');
			var bAuthenticated = oModel.getProperty('/authenticated')
			if(!bAuthenticated){
				this.getOwnerComponent().getRouter().navTo("home");
			}
		}
		
	});
});