'use strict';

angular.module('yoFireAuthStoreApp', [
    'yoFireAuthStoreApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'firebase',
    'toaster'
])

    // Define the constant which defines the Firebase database for this project
    .constant('FURL', 'https://yoShopping.firebaseio.com/')

    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
