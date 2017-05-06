(function main() {
  'use strict';

  angular
    .module('CRM', [])
    .controller('MainController', MainController);

  MainController.inject = ['$scope'];

  function MainController($scope) {
    activate();

    ////////////////

    function activate() {}
  }
}());
