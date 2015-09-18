'use strict';

angular.module('yoMongoAuthStoreApp')
    .controller('NavbarCtrl', function ($scope, $location, Auth) {
        $scope.menu = [
            {
                'title': 'Store',
                'link': '/store'
            },
            {
                'title': 'Cart',
                'link': '/cart'
            }
        ];

        $scope.isCollapsed = true;
        $scope.isLoggedIn = Auth.isLoggedIn;
        $scope.changePassOk = Auth.changePassOk;
        $scope.isAdmin = Auth.isAdmin;
        $scope.isManager = Auth.isManager;
        $scope.getCurrentUser = Auth.getCurrentUser;

        $scope.logout = function () {
            Auth.logout();
            $location.path('/login');
        };

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });
