'use strict';

angular.module('yoFireAuthStoreApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'firebase',
    'toaster',
    'angularMoment'
])

    // Define the constant which defines the Firebase database for this project
    .constant('FURL', 'https://yoShopping.firebaseio.com/')

    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/home');

        $locationProvider.html5Mode(true);
    });
