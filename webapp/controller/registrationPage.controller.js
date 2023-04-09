sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("RegistrationForm.registrationpage.controller.registrationPage", {
            onInit: function () {
                this.data = {
                        fName :"",
                        lName :"",
                        fatherName: "",
                        pNumber: "",
                        dateOfBirth: ""
                }
            },

            onAfterRendering: function () {
                var oModel = new sap.ui.model.json.JSONModel(this.data);
                this.getView().setModel(oModel);         
            },

            saveButtonPress : function(){
                this.getView().byId("idStudentData").setVisible(true);

            },

            cancelButtonPress : function(){
                this.getView().byId("idStudentData").setVisible(false);

            }
        });
    });
