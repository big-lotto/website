sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"smartie/loteca/website/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("smartie.loteca.website.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);
			this.getRouter().attachRouteMatched(this.onRouteMatched, this);
			this.getRouter().initialize();
			// set the device model
			this.setModel(models.createDeviceModel(), 'device');
		},

		onRouteMatched: function(oEvent){
			// var oParameters = oEvent.getParameters();
			// switch(oParameters.name){
			// 	case 'home' :
			// 	case 'login':
			// 		return;
			// }
			this.getModel('session').loadData('/session');
		}
	});
}); 