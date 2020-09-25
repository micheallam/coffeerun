(function(window) {
    "use strict";
    var PAYMENT_SELECTOR = "[data-payment-form='payment-form']"
    var App = window.App;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(PAYMENT_SELECTOR);

    formHandler.addPaymentHandler();
    console.log(formHandler);

})(window);