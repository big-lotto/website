sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"smartie/loteca/website/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("smartie.loteca.website.controller.Login", {

		formatter: formatter,

		onInit: function () {

		},

		onGoogle: function(){
			location.href = '/auth/google';
		}
		
	});
});