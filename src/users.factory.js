(function usersFactory() {
  'use strict';

  angular
    .module('CRM')
    .factory('Users', Users);

  function Users() {
    var service = {
      load: load,
      save: save
    };

    return service;

    ////////////////

    function load() {
      return "users" in localStorage ? JSON.parse(localStorage.getItem("users")) : [];
    }

    function save(users) {
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
}());
