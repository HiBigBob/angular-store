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
  $scope.cart = [];
  $scope.total = 0;

  $scope.showing = function(todo) {
    $scope.todo = todo;
  };

  $scope.addCart = function(todo) {
      var vars = $scope.cart.indexOf(todo);
      if (vars >= 0) {
        todo = $scope.cart[vars];
        todo.quantite = todo.quantite + 1;
        $scope.cart.splice(vars, 1);
      } else {
        todo.quantite = 1;
      }
      console.log(todo);

      $scope.cart.push(todo);
      
      $scope.total = 0;
      angular.forEach($scope.cart, function(product) {
          $scope.total += product.price * product.quantite;
      });
  };

  $scope.todos = [
      {
        id: 1,
        isbn : '2800156554',
        title: 'Orbital',
        price: 11.50
      },
      {
        id: 2,
        isbn : '2365770258',
        title: 'Fables',
        price: 14.50
      },
      {
        id: 3,
        isbn : '2365772013',
        title: 'Saga',
        price: 15
      },
      {
        id: 4,
        isbn : '2809446245',
        title: 'Deadpool : Les noces de Dracula',
        price: 12.50
      },
      {
        id: 5,
        isbn : '236577430X',
        title: 'Y the last man',
        price: 28
      },
      {
        id: 6,
        isbn : '2365776167',
        title: 'Batman',
        price: 19
      },
      {
        id: 7,
        isbn : '2800108681',
        title: 'Les tuniques bleus',
        price: 11
      },
      {
        id: 8,
        isbn : '2365775098',
        title: 'Infinite crisis',
        price: 28
      },
    ];
});