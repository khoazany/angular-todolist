'use strict';

angular.module('cApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.sortable',
  'LocalStorageModule'
  ])
.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('ls');
}])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'ToDoCtrl'
  })
  .when('/email', {
    templateUrl: 'views/email.html',
    controller: 'EmailCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
