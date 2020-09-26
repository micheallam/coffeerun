(function(window) {
    "use strict";
    var PAYMENT_SELECTOR = "[data-payment-form='payment-form']";
    var App = window.App;
    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(PAYMENT_SELECTOR);

    formHandler.addSubmitHandler(function(){
        var name = $('#name').val();
        var modalBody = "Thank you for your payment, " + name + '!';
          $("ex1").text(modalBody);
          $("ex1").modal("show");
    });
    console.log(formHandler);

})(window);