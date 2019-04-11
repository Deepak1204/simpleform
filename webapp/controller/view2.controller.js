	sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sample.form.sample_form.controller.view2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sample.form.sample_form.view.view2
		 */
			onInit: function () {
			 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        	oRouter.getRoute("view2").attachMatched(this._onRouteMatched, this);
		},
		back:function(){
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("RouteView1");
		},
		_onRouteMatched: function (evt){
			var newm = this.getView().getModel("oModel1");
			this.getView().setModel(newm,"model1");
			//this.getOwnerComponent().setModel(newm, "model1");
			//this.getView().byId("table").setModel(newm);
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sample.form.sample_form.view.view2
		 */
		
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sample.form.sample_form.view.view2
		 */
			onAfterRendering: function() {
		//	var newm = this.getView().getModel("oModel1");
			}

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sample.form.sample_form.view.view2
		 */
		//	onExit: function() {
		//
		//	}

	});

});