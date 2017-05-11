(function main() {
  'use strict';

  angular
    .module('CRM')
    .controller('MainController', MainController);

  MainController.inject = ['$scope', 'Users'];

  function MainController($scope, Users) {
    $scope.users = [];
    $scope.new = {};
    $scope.temp = {};
    $scope.create = create;
    $scope.reset = reset;
    $scope.edit = edit;
    $scope.modify = modify;
    $scope.remove = remove;
    $scope.editing = false;
    $scope.toggle = true;
    init();

    ////////////////

    function init() {
      $scope.users = Users.load();
    }

    function create(user) {
      $scope.users.push(user);
      reset();
      Users.save($scope.users);
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
      Users.save($scope.users);
    }
  }
}());
