sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"smartie/loteca/website/model/formatter",
	"smartie/loteca/website/controller/Menu",
	], function(Controller, formatter, Menu) {
		"use strict";

		return Controller.extend("smartie.loteca.website.controller.App", {

			menu: Menu,

			formatter: formatter,

			onInit: function () {

			},

			onLogin: function(){

			}
		});
	});