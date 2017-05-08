(function main() {
  'use strict';

  angular
    .module('CRM', [])
    .controller('MainController', MainController);

  MainController.inject = ['$scope'];

  function MainController($scope) {
    $scope.users = [];
    $scope.new = {};
    $scope.temp = {};
    $scope.create = create;
    $scope.reset = reset;
    $scope.edit = edit;
    $scope.modify = modify;
    $scope.remove = remove;
    $scope.editing = false;
    activate();

    ////////////////

    function activate() {}

    function create(user) {
      $scope.users.push(user);
      reset();
    }

    function reset() {
      if ($scope.editing) {
        $scope.editing = false;
      }
      $scope.new = {};
    }

    function edit(user) {
      $scope.new = angular.copy(user);
      $scope.temp = user;
      $scope.editing = true;
    }

    function modify(user) {
      remove($scope.temp);
      create(user);
    }

    function remove(user) {
      $scope.users = $scope.users.filter((el) => (el !== user));
    }
  }
}());
