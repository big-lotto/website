sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		setSideMenuModel: function(component){
			component.getModel('sideMenu').setProperty('/', {
				expanded: false
			});
		},

		toggleSideMenu: function(component){
			var oModel = component.getModel('sideMenu');
			var bExpanded = oModel.getProperty('/expanded');
			oModel.setProperty('/expanded', !bExpanded);
		}

	};
});