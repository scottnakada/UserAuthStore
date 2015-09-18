'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMongoAuthStoreApp')
        /* Configure a route for this function */
        .controller('CartCtrl', function ($scope, DataService) {

            // get store and cart from service
            $scope.store = DataService.store;
            $scope.cart = DataService.cart;

        });

}());
/* Close the IIFE */
