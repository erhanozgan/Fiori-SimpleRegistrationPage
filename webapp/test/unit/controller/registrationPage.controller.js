/*global QUnit*/

sap.ui.define([
	"RegistrationForm/registrationpage/controller/registrationPage.controller"
], function (Controller) {
	"use strict";

	QUnit.module("registrationPage Controller");

	QUnit.test("I should test the registrationPage controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
