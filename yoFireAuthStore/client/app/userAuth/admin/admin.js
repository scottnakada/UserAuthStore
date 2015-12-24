'use strict';

angular.module('yoFireAuthStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/userAuth/admin/admin.html',
        controller: 'AdminCtrl'
      });
  });
