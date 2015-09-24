'use strict';

angular.module('ionFireAuthStoreApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: "home/home.html",
                        controller: 'HomeCtrl'
                    }
                }
            });
    }
);
