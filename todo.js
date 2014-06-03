var todoApp = angular.module('todoApp', []);

todoApp.controller('mainCtrl', ['$scope',
  function($scope) {
    $scope.newTodo = "";
    
    $scope.todos = [];
    
    $scope.toggleStatus = function(todo) {
      todo.status = (todo.status === "pending") ? "completed" : "pending";
    };
    
    $scope.checked = function(todo) {
      return todo.status === "completed";
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
      var completedIdxs = [];
      
      $scope.todos.forEach(function(todo) {
        if (todo.status === "completed") {
          completedIdxs.unshift($scope.todos.indexOf(todo));
        }
      });

      completedIdxs.forEach(function(idx) {
        $scope.todos.splice(idx, 1);
      })
    };
  }]);