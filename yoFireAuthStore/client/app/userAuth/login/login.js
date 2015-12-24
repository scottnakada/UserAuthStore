'use strict';

angular.module('yoFireAuthStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/userAuth/login/login.html',
        controller: 'LoginCtrl'
      });
  });
