'use strict';

/* IIFE to isolate the scope of this function */
(function () {

    /* Reference the main angular module */
    angular.module('yoMongoAuthStoreApp')
        /* Define the Admin Controller */
        .controller('AdminCtrl', function ($scope, $http, Auth, User) {

            // Use the User $resource to fetch all users
            $scope.users = User.query();

            $scope.delete = function (user) {
                User.remove({id: user._id});
                angular.forEach($scope.users, function (u, i) {
                    if (u === user) {
                        $scope.users.splice(i, 1);
                    }
                });
            };
        });

}());
/* Close the IIFE */
