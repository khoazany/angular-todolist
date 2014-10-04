'use strict';

angular.module('cApp')
.controller('MainCtrl', function ($scope, localStorageService) {
    /*
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    */

    $scope.error = '';
    $scope.success = '';

    $scope.$watch('success',function(){
        setTimeout(function(){
            $scope.success = '';
        },10000);
    },true);

    $scope.$watch('error',function(){
        setTimeout(function(){
            $scope.error = '';
        },10000);
    },true);

    // Include header and footer
    $scope.footer = function () {
        return "views/footer.html";
    };
    $scope.header = function () {
        return "views/header.html";
    };      

    $scope.clock = new Date();
    var updateClock = function(){
        $scope.clock = new Date();
    };
    setInterval(function(){
        $scope.$apply(updateClock);
    },1000);

    $scope.navbar = [
        {name: "Home", active: true, href: "#"},
        {name: "Email", active: true, href: "/#/email"},
        {name: "Contact",active: true, href: "#"}
    ];
});
