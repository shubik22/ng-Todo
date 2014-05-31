var todoApp = angular.module('todoApp', []);

todoApp.controller('mainCtrl', ['$scope',
  function($scope) {
    $scope.newTodo = "";
    
    $scope.todos = [];
    
    $scope.toggleStatus = function(todo) {
      todo.status = (todo.status === "pending") ? "completed" : "pending";
    };
    
    $scope.addTodo = function() {
      if ($scope.newTodo) {
        var todo = {
          text: $scope.newTodo,
          status: "pending",
        }
        $scope.todos.push(todo);
        $scope.newTodo = "";
      }
    };
    
    $scope.clearCompleted = function() {
      $scope.todos.filter(function(todo) {
        return todo.status === "pending";
      })
    };
  }]);