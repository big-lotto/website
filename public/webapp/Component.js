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
		 	
		 	this._readSession().then(function(bAuthenticated){
		 		models.setSideMenuModel(this);
		 		this.getRouter().initialize();
		 	}.bind(this));

		 	this.setModel(models.createDeviceModel(), 'device');
		 },

		 onRouteMatched: function(oEvent){
		 	var oParameters = oEvent.getParameters();
		 	switch(oParameters.name){
		 		case 'home' :
		 		case 'login':
		 		return;
		 	}

		 	this._readSession().then(function(bAuthenticated){
		 		if(!bAuthenticated){
		 			this.getRouter().navTo("home");	
		 		}
		 	}.bind(this));

		 },

		 _readSession: function(){
		 	var oPromise = new Promise(function(resolve, reject){
		 		var oSessionModel = this.getModel('session');
		 		oSessionModel.attachEventOnce('requestCompleted', function(oEvent){
		 			var bAuthenticated = oSessionModel.getProperty('/authenticated');
		 			resolve(bAuthenticated);
		 		}, this);
		 		oSessionModel.loadData('/session');
		 	}.bind(this));
		 	return oPromise;
		 }
		});
	}); 