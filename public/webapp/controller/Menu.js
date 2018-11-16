sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
	], function(JSONModel, Device) {
		"use strict";

		return {

			onHome: function(oEvent){
				this.getOwnerComponent().getRouter().navTo('home');
			},

			onLogin: function (oEvent) {
				this.getOwnerComponent().getRouter().navTo('login');
			},

			onLogout: function (oEvent) {
				location.href = '/auth/logout';
			}

		};
	});