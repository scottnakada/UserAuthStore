'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMongoAuthStoreApp')
        /* Define the Edit Product Controller */
        .controller('EditProductCtrl', function ($scope, DataService, Auth, $location) {

            // Make sure the user is a manager before showing this page
            if (!Auth.isManager()) {
                console.log('EditProductCtrl: You need Manager privileges to access this page');
                // See if they are signed In
                if (!Auth.isLoggedIn()) {
                    // Not logged in, go to the login page
                    $location.path("/login");
                } else {
                    // Not authorized for this page; go back to the store
                    $location.path("/store");
                }
            }

            $scope.order = 'sku';

            /* Import the products array from the Data Service */
            $scope.products = DataService.store.products;

            /* Create local methods for the store products from the Data Service */
            $scope.addProduct = DataService.store.addProduct;
            $scope.deleteProduct = DataService.store.deleteProduct;
            $scope.updateProduct = DataService.store.updateProduct;

            // Show the data as a list
            $scope.showList = false;

        });

}());
/* Close the IIFE */
