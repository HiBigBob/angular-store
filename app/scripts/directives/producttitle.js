'use strict';

/**
 * @ngdoc directive
 * @name angularStoreApp.directive:productTitle
 * @description
 * # productTitle
 */
angular.module('angularStoreApp')
  .directive('productTitle', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the productTitle directive');
      }
    };
  });
