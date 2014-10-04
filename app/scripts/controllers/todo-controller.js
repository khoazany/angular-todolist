'use strict';

angular.module('cApp')
.controller('ToDoCtrl', function ($scope, localStorageService) {
    /*
    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    */
   
    (function($) {
        $('.test').slideUp('slow').slideDown('slow').hide('slow');
        $('.test2').animate({
          width: '200px'},
          1000).animate({ borderLeftWidth: '10px' },1000);
    })(jQuery);

    $scope.todos = [
    {name: 'Walk',done: false},
    {name: 'Run',done: true}
    ];
    $scope.searchKey = '';
    $scope.data = {
        mode: 'Editable List',
        inputColor: 'black'
    };

    $scope.$watch('todos',function () {
        if($scope.error != '') {
            $scope.error = '';
        }
    }, true);

    $scope.$watch('searchKey',function () {
        console.log($scope.searchKey);
    }, true);      

    /*
    $scope.$watch('todos',function () {
        var lastTodo = localStorageService.get('todos');
        localStorageService.add('todosTemp',lastTodo && lastTodo.split('\n') || []); 
        localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);
*/

$scope.addToDo = function () {
    var check = true;
    angular.forEach($scope.todos, function(item) {
        if($scope.td === item.name) {
            $scope.error = 'You have already added this item';
            $scope.success = '';
            check = false;
        }
    });
    if(check) {
        var toAdd = {
            name: $scope.td,
            done: false  
        };
        $scope.todos.push(toAdd);
        $scope.success = 'Item added successfully';
    }
    $scope.td = '';
};

$scope.removeTodo = function(index) {
   $scope.success = 'Item removed successfully';
   $scope.todos.splice(index, 1);
};

$scope.clearData = function() {
    $scope.success = 'Data cleared successfully';
    $scope.todos = [];
};

    // Count number of items
    $scope.count = function() {
        var count = 0;
        angular.forEach($scope.todos, function() {
            count++;
        });
        return count;
    };

    // Change color when mouseenter
    $scope.changeColor = function(color) {
        $scope.data.inputColor = color;
    };
})
.filter('checkedItems',function() {
    return function (items, showComplete) {
        var resultArr = [];
        angular.forEach(items, function (item) {
            if(item.done == false || showComplete == true) {
                resultArr.push(item);
            }
        });
        return resultArr;
    };
})
.filter('searchResults',function() {
    return function (items, searchKey) {
        var resultArr = [];
        angular.forEach(items, function (item) {
            if(searchKey == '' || item.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1){
                resultArr.push(item);
            }
        });
        return resultArr;
    };
});
