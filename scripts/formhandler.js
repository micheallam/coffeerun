(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App || {};
    var $ = window.jQuery;

    class FormHandler {
        constructor(selector) {
            // code will go here
            console.log('Inside FormHandler');
            if (!selector) { throw new Error('No selector provided'); }

            this.$formElement = $(selector);
            if (this.$formElement.length === 0) {
                throw new Error('Could not find element with selector: ' + selector);
            }
        }
        addSubmitHandler(fn) {
            console.log('Setting submit handler for form');

            this.$formElement.on('submit', function (event) {
                event.preventDefault();

                var data = {};
                $(this).serializeArray().forEach(function (item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                
                fn(data);
                this.reset();
                this.elements[0].focus();

                console.log('after fn(data)');
            });
        }

        addPaymentHandler(fn) {
            console.log('Setting submit handler for payment form');
            this.$formElement.on('submit', function(event) {
                event.preventDefault();

                var data= {};
                $(this).serializeArray().forEach(function(item) {
                    data[item.name] = item.value;
                    console.log(item.name + ' is ' + item.value);
                });
                console.log(data);
                //HTML DOM innerHTML function which prints message when clicked
                var modalBody = 'Thank you for your payment, ' + data.username + '!';
                $('#ex1').text(modalBody);
                $('#ex1').modal('show');
            });
        }
    }

    App.FormHandler = FormHandler;
    window.App = App;
})(window);