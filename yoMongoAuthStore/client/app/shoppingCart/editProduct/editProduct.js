'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMongoAuthStoreApp')
        /* Configure a route for this function */
        .config(function ($stateProvider) {
            $stateProvider
                .state('editProduct', {
                    url: '/editProduct',
                    templateUrl: 'app/shoppingCart/editProduct/editProduct.html',
                    controller: 'EditProductCtrl'
                });
        });

}());
/* Close the IIFE */
