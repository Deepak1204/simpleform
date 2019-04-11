sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sample.form.sample_form.controller.View1", {
		onInit: function () {

		},
		OnPress:function(){
			var obj={};
			obj.num="234";
			obj.nuc="567";
			
			var obj2={};
			obj2.num="abc";
			obj2.nuc="def";
			var arr =[];
			arr.push(obj);
			arr.push(obj2);
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(arr);
			this.getView().setModel(oModel);
			 this.getOwnerComponent().setModel(oModel, "oModel1");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("view2");
		}
	});
});