'use strict';

angular.module('yoFireAuthStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('register', {
        url: '/register',
        templateUrl: 'app/userAuth/register/register.html',
        controller: 'RegisterCtrl'
      });
  });
