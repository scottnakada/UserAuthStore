'use strict';

angular.module('ionFireAuthStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('app.register', {
        url: '/register',
          views: {
            'menuContent': {
              templateUrl: "userAuth/register/register.html",
              controller: 'RegisterCtrl'
            }
          }
      });
  });
