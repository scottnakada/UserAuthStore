'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMongoAuthStoreApp')
        /* Define the Login Controller */
        .controller('LoginCtrl', function ($scope, Auth, $location, $window) {
            $scope.user = {};
            $scope.errors = {};

            $scope.login = function (form) {
                $scope.submitted = true;

                if (form.$valid) {
                    Auth.login({
                        email: $scope.user.email,
                        password: $scope.user.password
                    })
                        .then(function () {
                            // Logged in, redirect to home
                            $location.path('/');
                        })
                        .catch(function (err) {
                            $scope.errors.other = err.message;
                        });
                }
            };

            $scope.loginOauth = function (provider) {
                $window.location.href = '/auth/' + provider;
            };
        });

}());
/* Close the IIFE */
