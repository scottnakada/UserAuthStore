'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMongoAuthStoreApp')
        /* Add routes for the admin page */
        .config(function ($stateProvider) {
            $stateProvider
                .state('admin', {
                    url: '/admin',
                    templateUrl: 'app/account/admin/admin.html',
                    controller: 'AdminCtrl'
                });
        });

}());
/* Close the IIFE */
