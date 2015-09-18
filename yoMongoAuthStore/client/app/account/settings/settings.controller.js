'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMongoAuthStoreApp')
        /* Define the Settings (Change Password) Controller */
        .controller('SettingsCtrl', function ($scope, User, Auth) {
            $scope.errors = {};

            $scope.changePassword = function (form) {
                $scope.submitted = true;
                if (form.$valid) {
                    Auth.changePassword($scope.user.oldPassword, $scope.user.newPassword)
                        .then(function () {
                            $scope.message = 'Password successfully changed.';
                        })
                        .catch(function () {
                            form.password.$setValidity('mongoose', false);
                            $scope.errors.other = 'Incorrect password';
                            $scope.message = '';
                        });
                }
            };
        });

}());
/* Close the IIFE */
