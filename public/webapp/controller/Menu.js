sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"smartie/loteca/website/model/models"
	], function(JSONModel, models) {
		"use strict";

		return {

			onToggleSideMenu: function(oEvent){
				models.toggleSideMenu(this.getOwnerComponent());
			},

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