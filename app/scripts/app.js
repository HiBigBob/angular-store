'use strict';

/**
 * @ngdoc overview
 * @name angularStoreApp
 * @description
 * # angularStoreApp
 *
 * Main module of the application.
 */

angular.module('angularStoreApp', ['ngMaterial'])
.controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = function() {
    $mdSidenav('left').toggle()
                      .then(function(){
                          $log.debug("toggle left is done");
                      });
  };
  $scope.toggleRight = function() {
    $mdSidenav('right').toggle()
                        .then(function(){
                          $log.debug("toggle RIGHT is done");
                        });
  };

  $scope.close = function() {
    $mdSidenav('left').close()
                      .then(function(){
                        $log.debug("close LEFT is done");
                      });
  };

  $scope.todo = null;
  $scope.cart = null;

  $scope.showing = function(todo) {
    $scope.todo = todo;
  };

  $scope.addCart = function(todo) {
    $scope.cart.push(todo);
  };

  $scope.todos = [
      {
        isbn : '2800156554',
        title: 'Orbital - Tome 6'
      },
      {
        isbn : '2365770258',
        title: 'Fables - Tome 1'
      },
      {
        isbn : '2365772013',
        title: 'Saga - Tome 1'
      },
      {
        isbn : '2809446245',
        title: 'Deadpool : Les noces de Dracula'
      },
      {
        isbn : '2800156554',
        title: 'Orbital - Tome 6'
      },
      {
        isbn : '2365770258',
        title: 'Fables - Tome 1'
      },
      {
        isbn : '2365772013',
        title: 'Saga - Tome 1'
      },
      {
        isbn : '2809446245',
        title: 'Deadpool : Les noces de Dracula'
      },
    ];
});